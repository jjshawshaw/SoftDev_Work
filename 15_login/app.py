    # Justin Shaw & Tanzim Elahi
    # SoftDev1 pd1
    # K15 -- ?
    # 2019-10-04


from flask import Flask
from flask import render_template
from flask import request
from flask import redirect
from flask import session
import os

# creates flask app
app = Flask(__name__)
app.secret_key = os.urandom(32) #secret key randomly generated

@app.route("/")
def form():
    if not "loggedIn" in session:
        return render_template("form.html")
    else:
        return redirect("/welcome")

@app.route("/auth", methods=["POST"])
def authenticate():
    print(request.form)
    session['username']= request.form.get('username')
    session['password']= request.form.get('password')
    if session['username'] == "fredGang" and session['password'] == "softdev":
        session['loggedIn'] = True
        return redirect("/welcome")
    else:
        print(f"{session['username']} {session['password']}")
        return redirect("/error")

@app.route("/welcome")
def welcome():
    return render_template("welcome.html")

@app.route("/error")
def error():
    return render_template("error.html")


if __name__ == "__main__":
    app.debug = True
    app.run()
