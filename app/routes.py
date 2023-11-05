from flask import render_template, redirect, request, url_for
from app import app


@app.route('/welcome')
@app.route('/index')
@app.route('/')
def welcome():
    return render_template('welcome.html') 


@app.route('/home')
def home():
    return render_template('home.html')
