#!/usr/bin/env python3

import os
import random
import subprocess
from flask import Flask, abort, redirect, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return redirect(url_for('static', filename='radio.html'))

@app.route("/song")
def song():
    files = os.listdir('static/song')

    try:
        return random.choice(files)
    except IndexError:
        abort(404)
