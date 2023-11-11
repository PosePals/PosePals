project(nnruntime)

cmake_minimum_required(VERSION 3.10)

set(OpenCV_DIR ${CMAKE_SOURCE_DIR}/opencv-mobile-android/sdk/native/jni)
find_package(OpenCV REQUIRED core imgproc)

set(ncnn_DIR ${CMAKE_SOURCE_DIR}/ncnn-android-vulkan/${ANDROID_ABI}/lib/cmake/ncnn)
find_package(ncnn REQUIRED)

file(GLOB filter_files filter/*.cpp)
include_directories(
        ${CMAKE_CURRENT_SOURCE_DIR}/filter
        ${CMAKE_CURRENT_SOURCE_DIR}
)
add_library(nnruntime SHARED nnruntime.cpp network_base.cpp landmark.cpp ndkcamera.cpp ${filter_files})

target_link_libraries(nnruntime ncnn ${OpenCV_LIBS} camera2ndk mediandk)