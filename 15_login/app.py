from flask import Flask
from flask import render_template
from flask import request
from flask import redirect
from flask import session
import os

app = Flask(__name__)
app.secret_key = os.urandom(32)
lIn = False

head = """
Justin Shaw & Tanzim Elahi
SoftDev1 pd1
K15 -- ?
2019-10-04
"""

@app.route("/")
def form():
    return render_template("form.html",
                               header = head)
@app.route("/auth")
def authenticate():
        session['username']= request.args['username']
        session['password']= request.args['password']
        if session['username'] == "fredGang" and session['password'] == "softdev":
            return redirect("/welcome")
        else:
            return redirect("/error")
            
@app.route("/welcome")
def welcome():
    return "Welcome"

@app.route("/error")
def error():
    return "Wrong username or password"


if __name__ == "__main__":
    app.debug = True
    app.run()
