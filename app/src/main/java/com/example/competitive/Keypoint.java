package com.example.competitive;

import androidx.annotation.NonNull;

public class Keypoint
{
    public float x;
    public float y;
    public float z;

    public float confidence;

    public Keypoint(float x, float y, float z, float confidence) {
        this.x = x;
        this.y = y;
        this.z = z;

        this.confidence = confidence;
    }

    public float getX() {
        return x;
    }

    public void setX(float x) {
        this.x = x;
    }

    public float getY() {
        return y;
    }

    public void setY(float y) {
        this.y = y;
    }

    public float getZ() {
        return z;
    }

    public void setZ(float z) {
        this.z = z;
    }

    public float getConfidence() {
        return confidence;
    }

    public void setConfidence(float confidence) {
        this.confidence = confidence;
    }

    @NonNull
    @Override
    public String toString() {
        return "Keypoint{" +
                "x=" + x +
                ", y=" + y +
                ", confidence=" + confidence +
                '}';
    }
}

