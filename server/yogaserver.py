from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db_connection import write_score, load_scores
import numpy as np
# from .metrics import mean_angle_diff, stability

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*']
)

BATCH_SIZE = 15
NUM_JOINTS = 39

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/get_scoreboard/")
def get_scoreboard():
    return load_scores()

@app.get("/submit_score/")
def submit_score(name, score):
    write_score(name, score)

# @app.get("/get_score/{joints}")
# def get_score(joints):
#     stability_score = stability(joints)
#     angle_score = [mean_angle_diff(joints_per_frame) for joints_per_frame in joints]
#     return {"score_stab": stability_score, "score_angle": angle_score}

@app.get("/get_score_str/{joints}")
def get_score_str(joints):
    pose_actual = np.array(joints.split(), dtype=np.float32).reshape(BATCH_SIZE, NUM_JOINTS, 3)
    return {"stability_score": 1/(1e-8+(pose_actual[-1:] - pose_actual[:1]).mean())}
