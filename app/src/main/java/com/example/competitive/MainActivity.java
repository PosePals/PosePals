package com.example.competitive;

import android.Manifest;
import android.app.Activity;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.PixelFormat;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.PixelCopy;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.View;
import android.view.WindowManager;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.Spinner;

import androidx.annotation.RequiresApi;
import androidx.collection.CircularArray;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.webkit.WebViewAssetLoader;
import androidx.webkit.WebViewClientCompat;

import android.util.Base64;

import java.io.ByteArrayOutputStream;
import java.security.Key;
import java.util.ArrayList;

public class MainActivity extends Activity implements SurfaceHolder.Callback
{

    private static class LocalContentWebViewClient extends WebViewClientCompat
    {

        private final WebViewAssetLoader mAssetLoader;

        LocalContentWebViewClient(WebViewAssetLoader assetLoader)
        {
            mAssetLoader = assetLoader;
        }

        @Override
        @RequiresApi(21)
        public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request)
        {
            return mAssetLoader.shouldInterceptRequest(request.getUrl());
        }

        @Override
        @SuppressWarnings("deprecation") // To support API < 21.
        public WebResourceResponse shouldInterceptRequest(WebView view, String url)
        {
            return mAssetLoader.shouldInterceptRequest(Uri.parse(url));
        }
    }

    public static final int REQUEST_CAMERA = 10;

    private NNRuntime nnruntime = new NNRuntime();

    private ArrayList<Keypoint> bridge_buffer;
    private int facing = 0;

    private WebView webView;

    private Spinner spinnerModel;
    private Spinner spinnerCPUGPU;
    private int current_model = 0;
    private int current_cpugpu = 0;

    private SurfaceView cameraView;

    // #####

    private StringBuilder keypointString;
    private int buffer_index = 0;

    // #####

    private Handler handler = new Handler();
    private Runnable bridgeRunnable = new Runnable() {
        @Override
        public void run()
        {
            Bitmap bitmap = nnruntime.getBitmap();

            if (bitmap != null)
            {
                if (buffer_index == 16)
                {
                    buffer_index = 0;

                    String finalKeypointString = keypointString.toString();
                    webView.post(new Runnable() {
                        @Override
                        public void run() {
                            webView.loadUrl("javascript:(function() { " +
                                    "document.getElementById('keypointData').value = '" + finalKeypointString + "'; " +
                                    "})()");
                        }
                    });

                    System.out.println(finalKeypointString);
                }

                if (buffer_index == 0)
                {
                    keypointString = new StringBuilder();
                }

                // Step 2: Convert Bitmap to ByteArrayOutputStream
                ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
                bitmap.compress(Bitmap.CompressFormat.JPEG, 80, byteArrayOutputStream); // You can choose the format and quality

                // Step 3: Convert ByteArrayOutputStream to byte array
                byte[] byteArray = byteArrayOutputStream.toByteArray();

                // Step 4: Encode byte array to Base64 String
                String base64String = Base64.encodeToString(byteArray, Base64.DEFAULT);

                webView.post(new Runnable() {
                    @Override
                    public void run() {
                        webView.loadUrl("javascript:(function() { " +
                                "document.getElementById('camera').src = 'data:image/png;base64," + base64String + "'; " +
                                "})()");
                    }
                });

                // System.out.println(base64String);

                System.out.println("==================================================");

                Keypoint[] keypoints = nnruntime.getKeypointVector();

                if (keypoints != null) {
                    for (Keypoint keypoint : keypoints) {
                        if (keypoint != null) {
                            System.out.println("Keypoint: (x: " + keypoint.getX() + ", y: " + keypoint.getY() + ", z: " + keypoint.getZ() + "), ");
                            keypointString.append(keypoint.getX()).append(";");
                            keypointString.append(keypoint.getY()).append(";");
                            keypointString.append(keypoint.getZ()).append(";");
                        } else {
                            System.out.println("lost keypoint");
                            keypointString.append("0;");
                            keypointString.append("0;");
                            keypointString.append("0;");
                        }
                    }
                    buffer_index++;
                }
                System.out.println("==================================================");
            }

            // Schedule the next run
            handler.postDelayed(this, 50);
        }
    };

    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        cameraView = (SurfaceView) findViewById(R.id.cameraview);

        cameraView.getHolder().setFormat(PixelFormat.RGBA_8888);
        cameraView.getHolder().addCallback(this);

        Button buttonSwitchCamera = (Button) findViewById(R.id.buttonSwitchCamera);
        buttonSwitchCamera.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View arg0) {

                int new_facing = 1 - facing;

                nnruntime.closeCamera();

                nnruntime.openCamera(new_facing);

                facing = new_facing;
            }
        });

        spinnerModel = (Spinner) findViewById(R.id.spinnerModel);
        spinnerModel.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> arg0, View arg1, int position, long id)
            {
                if (position != current_model)
                {
                    current_model = position;
                    reload();
                }
            }

            @Override
            public void onNothingSelected(AdapterView<?> arg0)
            {
            }
        });

        spinnerCPUGPU = (Spinner) findViewById(R.id.spinnerCPUGPU);
        spinnerCPUGPU.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> arg0, View arg1, int position, long id)
            {
                if (position != current_cpugpu)
                {
                    current_cpugpu = position;
                    reload();
                }
            }

            @Override
            public void onNothingSelected(AdapterView<?> arg0)
            {
            }
        });

        webView = (WebView)findViewById(R.id.webview);
        webView.getSettings().setJavaScriptEnabled(true); // Enable JavaScript if needed

        // Load local HTML file
        final WebViewAssetLoader assetLoader = new WebViewAssetLoader.Builder()
                .addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this))
                .addPathHandler("/res/", new WebViewAssetLoader.ResourcesPathHandler(this))
                .build();
        webView.setWebViewClient(new LocalContentWebViewClient(assetLoader));

        webView.loadUrl("https://appassets.androidplatform.net/assets/ui/index.html");

        reload();
    }

    private void reload()
    {
        boolean ret_init = nnruntime.loadModel(getAssets(), current_model, current_cpugpu);
        if (!ret_init)
        {
            Log.e("MainActivity", "nnruntime loadModel failed");
        }
    }

    @Override
    public void surfaceChanged(SurfaceHolder holder, int format, int width, int height)
    {
        nnruntime.setOutputWindow(holder.getSurface());
    }

    @Override
    public void surfaceCreated(SurfaceHolder holder)
    {
        handler.post(bridgeRunnable);
    }

    @Override
    public void surfaceDestroyed(SurfaceHolder holder)
    {
        handler.removeCallbacks(bridgeRunnable);
    }

    @Override
    public void onResume()
    {
        super.onResume();

        if (ContextCompat.checkSelfPermission(getApplicationContext(), Manifest.permission.CAMERA) == PackageManager.PERMISSION_DENIED)
        {
            ActivityCompat.requestPermissions(this, new String[] {Manifest.permission.CAMERA}, REQUEST_CAMERA);
        }

        nnruntime.openCamera(facing);
    }

    @Override
    public void onPause()
    {
        super.onPause();

        nnruntime.closeCamera();
    }
}