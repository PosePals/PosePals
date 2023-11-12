import sqlite3


def DB_operation(commands):
    con = sqlite3.connect("score.db")
    cur = con.cursor()
    for command in commands:
        cur.execute(command)
    con.commit()
    con.close()

def DB_query(commands):
    con = sqlite3.connect("score.db")
    cur = con.cursor()
    for command in commands:
        cur.execute(command)
    result = cur.fetchall()
    con.close()
    return result

load_scores = lambda: DB_query(["SELECT * FROM scores ORDER BY score DESC"])
write_score = lambda name, score: DB_operation([f"INSERT INTO scores VALUES ('{name}', {score})"])
wipe = lambda: DB_operation(["DROP TABLE IF EXISTS scores", """CREATE TABLE scores (name TEXT, score INT)"""])