#!/usr/bin/env python3

import random
import subprocess
from flask import Flask, redirect, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return redirect(url_for('static', filename='radio.html'))

@app.route("/song")
def song():
    cmd   = 'ls -1 static/song'
    proc  = subprocess.run(cmd, shell=True, text=True, stdout=subprocess.PIPE)
    files = proc.stdout.splitlines()
    return random.choice(files)
