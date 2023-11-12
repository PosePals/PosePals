#!/bin/bash

# Define URLs
OPENCV_URL="https://github.com/nihui/opencv-mobile/releases/download/v11/opencv-mobile-4.5.1-android.zip"
NCNN_URL="https://github.com/Tencent/ncnn/releases/download/20210720/ncnn-20210720-android-vulkan.zip"

# Define destination directories
OPENCV_DIR="/app/src/main/cpp/opencv-mobile-android/"
NCNN_DIR="/app/src/main/cpp/ncnn-android-vulkan/"

# Create directories if they don't exist
mkdir -p "$OPENCV_DIR"
mkdir -p "$NCNN_DIR"

# Download and unzip OpenCV
wget "$OPENCV_URL" -O opencv.zip
unzip opencv.zip -d "$OPENCV_DIR"
rm opencv.zip

# Download and unzip ncnn
wget "$NCNN_URL" -O ncnn.zip
unzip ncnn.zip -d "$NCNN_DIR"
rm ncnn.zip

echo "Download and extraction complete."
