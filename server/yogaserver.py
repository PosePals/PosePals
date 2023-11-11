from fastapi import FastAPI
from db_connection import write_score, load_scores
from .metrics import mean_angle_diff, stability

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/get_scoreboard/")
def get_scoreboard():
    return load_scores()

@app.get("/submit_score/")
def submit_score(name, score):
    write_score(name, score)

@app.get("/get_score/{joints}")
def get_score(joints):
    stability_score = stability(joints)
    angle_score = [mean_angle_diff(joints_per_frame) for joints_per_frame in joints]
    return {"score_stab": stability_score, "score_angle": angle_score}