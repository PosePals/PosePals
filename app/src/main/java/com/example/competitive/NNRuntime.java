package com.example.competitive;

import android.content.res.AssetManager;
import android.view.Surface;

public class NNRuntime {

        public native boolean loadModel(AssetManager mgr, int modelid, int cpugpu);
        public native boolean openCamera(int facing);
        public native boolean closeCamera();
        public native boolean setOutputWindow(Surface surface);

        static {
        System.loadLibrary("nnruntime");
    }
}
