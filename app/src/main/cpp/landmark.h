#ifndef LANDMARK_H
#define LANDMARK_H

#include <opencv2/core/core.hpp>
#include <net.h>

struct Keypoint
        {
    float x;
    float y;
    bool visibility;
    Keypoint(float x,float y,bool visibility):x(x),y(y),visibility(visibility){}
};

struct Keypoint3d
{
    float x;
    float y;
    float z;
    Keypoint3d(float x,float y, float z):x(x),y(y),z(z){}
};

class LandmarkDetect
{
public:
    int load(AAssetManager* mgr, const char* modeltype, bool use_gpu = false);
    float detect(const cv::Mat& rgb, const cv::Mat& trans_mat, std::vector<Keypoint> &landmarks);

private:
    ncnn::Net landmark;
};

#endif // LANDMARK_H