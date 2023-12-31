#include <android/asset_manager_jni.h>
#include <android/native_window_jni.h>
#include <android/native_window.h>

#include <android/log.h>

#include <jni.h>

#include <string>
#include <vector>

#include <platform.h>
#include <benchmark.h>

#include "network_base.h"
#include "ndkcamera.h"

#include <opencv2/core/core.hpp>
#include <opencv2/imgproc/imgproc.hpp>
#include <android/bitmap.h>


#if __ARM_NEON
#include <arm_neon.h>
#endif // __ARM_NEON

static int draw_unsupported(cv::Mat& rgb)
{
    const char text[] = "unsupported";

    int baseLine = 0;
    cv::Size label_size = cv::getTextSize(text, cv::FONT_HERSHEY_SIMPLEX, 1.0, 1, &baseLine);

    int y = (rgb.rows - label_size.height) / 2;
    int x = (rgb.cols - label_size.width) / 2;

    cv::rectangle(rgb, cv::Rect(cv::Point(x, y), cv::Size(label_size.width, label_size.height + baseLine)),
                  cv::Scalar(255, 255, 255), -1);

    cv::putText(rgb, text, cv::Point(x, y + label_size.height),
                cv::FONT_HERSHEY_SIMPLEX, 1.0, cv::Scalar(0, 0, 0));

    return 0;
}

static int draw_fps(cv::Mat& rgb)
{
    // resolve moving average
    float avg_fps = 0.f;
    {
        static double t0 = 0.f;
        static float fps_history[10] = {0.f};

        double t1 = ncnn::get_current_time();
        if (t0 == 0.f)
        {
            t0 = t1;
            return 0;
        }

        float fps = 1000.f / (t1 - t0);
        t0 = t1;

        for (int i = 9; i >= 1; i--)
        {
            fps_history[i] = fps_history[i - 1];
        }
        fps_history[0] = fps;

        if (fps_history[9] == 0.f)
        {
            return 0;
        }

        for (int i = 0; i < 10; i++)
        {
            avg_fps += fps_history[i];
        }
        avg_fps /= 10.f;
    }

    char text[32];
    sprintf(text, "FPS=%.2f", avg_fps);

    int baseLine = 0;
    cv::Size label_size = cv::getTextSize(text, cv::FONT_HERSHEY_SIMPLEX, 0.5, 1, &baseLine);

    int y = 0;
    int x = rgb.cols - label_size.width;

    cv::rectangle(rgb, cv::Rect(cv::Point(x, y), cv::Size(label_size.width, label_size.height + baseLine)),
                  cv::Scalar(255, 255, 255), -1);

    cv::putText(rgb, text, cv::Point(x, y + label_size.height),
                cv::FONT_HERSHEY_SIMPLEX, 0.5, cv::Scalar(0, 0, 0));

    return 0;
}

static NetworkBase* g_network_base = 0;
static ncnn::Mutex lock;

static cv::Mat output_material;

static

class MyNdkCamera : public NdkCameraWindow
{
public:
    virtual void on_image_render(cv::Mat& rgb) const;
};

void MyNdkCamera::on_image_render(cv::Mat& rgb) const
{
    {
        ncnn::MutexLockGuard g(lock);

        if (g_network_base)
        {
            std::vector<Object> faceobjects;
            g_network_base->detect(rgb, faceobjects);

            g_network_base->draw(rgb, faceobjects);
        }
        else
        {
            draw_unsupported(rgb);
        }

        output_material = rgb;
    }

    draw_fps(rgb);
}

static MyNdkCamera* g_camera = 0;

extern "C" {

JNIEXPORT jint JNI_OnLoad(JavaVM* vm, void* reserved)
{
__android_log_print(ANDROID_LOG_DEBUG, "ncnn", "JNI_OnLoad");

g_camera = new MyNdkCamera;

return JNI_VERSION_1_4;
}

JNIEXPORT void JNI_OnUnload(JavaVM* vm, void* reserved)
{
    __android_log_print(ANDROID_LOG_DEBUG, "ncnn", "JNI_OnUnload");

    {
        ncnn::MutexLockGuard g(lock);

        delete g_network_base;
        g_network_base = 0;
    }

    delete g_camera;
    g_camera = 0;
}

jobject mat_to_bitmap(JNIEnv *env, cv::Mat &mat, bool needPremultiplyAlpha) {
    // Convert mat from BGR to RGBA
    if (mat.type() == CV_8UC3) {
        cv::Mat tempMat;
        cv::cvtColor(mat, tempMat, cv::COLOR_BGR2RGBA);
        mat = tempMat;
    } else if (mat.type() == CV_8UC1) {
        cv::Mat tempMat;
        cv::cvtColor(mat, tempMat, cv::COLOR_GRAY2RGBA);
        mat = tempMat;
    }

    jclass bitmapCls = env->FindClass("android/graphics/Bitmap");
    jmethodID createBitmapFunction = env->GetStaticMethodID(bitmapCls, "createBitmap", "(IILandroid/graphics/Bitmap$Config;)Landroid/graphics/Bitmap;");
    jstring configName = env->NewStringUTF("ARGB_8888");
    jclass bitmapConfigCls = env->FindClass("android/graphics/Bitmap$Config");
    jmethodID valueOfBitmapConfigFunction = env->GetStaticMethodID(bitmapConfigCls, "valueOf", "(Ljava/lang/String;)Landroid/graphics/Bitmap$Config;");
    jobject bitmapConfig = env->CallStaticObjectMethod(bitmapConfigCls, valueOfBitmapConfigFunction, configName);
    jobject newBitmap = env->CallStaticObjectMethod(bitmapCls, createBitmapFunction, mat.cols, mat.rows, bitmapConfig);

    void *bitmapPixels;
    AndroidBitmap_lockPixels(env, newBitmap, &bitmapPixels);
    uint32_t* newBitmapPixels = (uint32_t*) bitmapPixels;

    // Copy pixels from mat to Bitmap
    if (mat.isContinuous()) {
        memcpy(newBitmapPixels, mat.ptr<uint8_t>(0), mat.cols * mat.rows * mat.elemSize());
    } else {
        for (int row = 0; row < mat.rows; ++row) {
            memcpy(newBitmapPixels + row * mat.cols, mat.ptr<uint8_t>(row), mat.cols * mat.elemSize());
        }
    }

    AndroidBitmap_unlockPixels(env, newBitmap);

    return newBitmap;
}

extern "C"

JNIEXPORT jobjectArray JNICALL Java_com_example_competitive_NNRuntime_getKeypointVector(JNIEnv *env, jobject thiz)
{
    std::vector<Keypoint3d> keypoint_vector = g_network_base->get();

    if (keypoint_vector.empty()) {
        return nullptr;
    }

    jclass keypointClass = env->FindClass("com/example/competitive/Keypoint");
    jobjectArray keypointArray = env->NewObjectArray(keypoint_vector.size(), keypointClass, nullptr);

    jmethodID constructor = env->GetMethodID(keypointClass, "<init>", "(FFFF)V");

    for (size_t i = 0; i < keypoint_vector.size(); ++i) {
        jobject keypointObj = env->NewObject(keypointClass, constructor, keypoint_vector[i].x, keypoint_vector[i].y, keypoint_vector[i].z, 0.f);
        env->SetObjectArrayElement(keypointArray, i, keypointObj);
        env->DeleteLocalRef(keypointObj);
    }

    return keypointArray;
}


extern "C"

JNIEXPORT jobject JNICALL Java_com_example_competitive_NNRuntime_getBitmap(JNIEnv *env, jobject thiz)
{
    if (!output_material.empty()) {
        return mat_to_bitmap(env, output_material, false);
    } else {
        return nullptr;
    }
}



// public native boolean loadModel(AssetManager mgr, int modelid, int cpugpu);
extern "C"

JNIEXPORT jboolean JNICALL Java_com_example_competitive_NNRuntime_loadModel(JNIEnv* env, jobject thiz, jobject assetManager, jint modelid, jint cpugpu)
{
    if (modelid < 0 || modelid > 6 || cpugpu < 0 || cpugpu > 1)
    {
        return JNI_FALSE;
    }

    AAssetManager* mgr = AAssetManager_fromJava(env, assetManager);

    __android_log_print(ANDROID_LOG_DEBUG, "ncnn", "loadModel %p", mgr);
    const char* modeltypes[] =
            {
                    "nn/heavy"
            };

    const char* modeltype = modeltypes[(int)modelid];
    bool use_gpu = (int)cpugpu == 1;

    // reload
    {
        ncnn::MutexLockGuard g(lock);

        if (use_gpu && ncnn::get_gpu_count() == 0)
        {
            // no gpu
            delete g_network_base;
            g_network_base = 0;
        }
        else
        {
            if (!g_network_base)
                g_network_base = new NetworkBase;
            g_network_base->load(mgr, modeltype, use_gpu);
        }
    }

    return JNI_TRUE;
}

// public native boolean openCamera(int facing);
extern "C"

JNIEXPORT jboolean JNICALL Java_com_example_competitive_NNRuntime_openCamera(JNIEnv* env, jobject thiz, jint facing)
{
    if (facing < 0 || facing > 1)
        return JNI_FALSE;

    __android_log_print(ANDROID_LOG_DEBUG, "ncnn", "openCamera %d", facing);

    g_camera->open((int)facing);

    return JNI_TRUE;
}

// public native boolean closeCamera();
extern "C"

JNIEXPORT jboolean JNICALL Java_com_example_competitive_NNRuntime_closeCamera(JNIEnv* env, jobject thiz)
{
    __android_log_print(ANDROID_LOG_DEBUG, "ncnn", "closeCamera");

    g_camera->close();

    return JNI_TRUE;
}

// public native boolean setOutputWindow(Surface surface);
extern "C"

JNIEXPORT jboolean JNICALL Java_com_example_competitive_NNRuntime_setOutputWindow(JNIEnv* env, jobject thiz, jobject surface)
{
    ANativeWindow* win = ANativeWindow_fromSurface(env, surface);

    __android_log_print(ANDROID_LOG_DEBUG, "ncnn", "setOutputWindow %p", win);

    g_camera->set_window(win);

    return JNI_TRUE;
}

}