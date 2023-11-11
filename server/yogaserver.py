from fastapi import FastAPI
from db_connection import write_score, load_scores, wipe

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