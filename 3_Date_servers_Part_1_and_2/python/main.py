from fastapi import FastAPI
import time
import requests
import json
app = FastAPI()


@app.get("/time")
def get_timestamp():
    miliseconds = int(time.time()*1000)
    return {"timestamp":miliseconds}

@app.get("/request-time")
def request_timestamp():
    response = requests.get('http://localhost:8080/time')
    return json.loads(response.text)