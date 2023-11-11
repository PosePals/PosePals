import cv2 as cv
import numpy as np

B = 10
N = 17
# [BATCH_SIZE, NUM_JOINTS, (X,Y,DEPTH)]
pose_gold = np.random.rand(B, N, 3)
pose_actual = np.random.rand(B, N, 3)

SKELETON = (
        (0, 1),
        (0, 4),
        (1, 2),
        (2, 3),
        (3, 7),
        (4, 5),
        (5, 6),
        (6, 8),
        (9, 10),
        (11,12),
        (11,13),
        (11,23),
        (12,14),
        (12,24),
        (13,15),
        (14,16),
        (15,17),
        (15,19),
        (15,21),
        (16,18),
        (16,20),
        (16,22),
        (17,19),
        (18,20),
        (23,24),
        (23, 25),
        (24, 26),
        (25, 27),
        (26, 28),
        (27, 29),
        (27, 31),
        (28, 30),
        (28, 32),
        (29, 31),
        (30, 32)
)
# cameramodel
intr = np.array([[1,0,0],[0,1,0],[0,0,1]])
inv_intr = np.linalg.inv(intr)
extr = np.array([[1,0,0,0],[0,1,0,0],[0,0,1,0]])
inv_extr = np.linalg.pinv(extr)


def tf_cam2world(x,y,depth):
    homcoords = np.array([x,y,1])
    world_coords = np.dot(np.dot(inv_extr, inv_intr), homcoords)
    return (world_coords * depth)[:-1]

def tf_world2cam(x,y,z):
    homcoords = np.array([x,y,z,1])
    cam_coords = np.dot(np.dot(intr, extr), homcoords)
    return (cam_coords / z)[:-1]


gold_frame_world = [tf_cam2world(*x) for x in pose_gold[0]]
actual_frame_world = [tf_cam2world(*x) for x in pose_actual[0]]

def get_angles(frame):
    angle_mat = np.zeros((len(SKELETON), len(SKELETON)))
    for i, (a,b) in enumerate(SKELETON):
        for j, (c,d) in enumerate(SKELETON):
            if not len(set([a,b,c,d])) == 3 or angle_mat[i,j] != 0:
                continue
            angle = np.arccos(np.dot(frame[a]-frame[b], frame[c]-frame[d]) / (np.linalg.norm(frame[a]-frame[b]) * np.linalg.norm(frame[c]-frame[d])))
            angle_mat[i,j] = angle
            angle_mat[j,i] = angle
    return angle_mat

def mean_angle_diff(gold_frame, actual_frame):
    diff = np.abs(get_angles(gold_frame, SKELETON) - get_angles(actual_frame, SKELETON))
    return np.mean(diff) * len(diff.nonzero())


def stability(pose_actual):
    return pose_actual[:-1] - pose_actual[:1]

