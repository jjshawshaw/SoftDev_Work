
# Justin Shaw & Tanzim Elahi
# SoftDev1 pd1
# K15 -- ?
# 2019-10-04


from flask import Flask
from flask import render_template
from flask import request
from flask import redirect
from flask import session
from flask import flash
import os

# creates flask app
app = Flask(__name__)
app.secret_key = os.urandom(32) #secret key randomly generated

## Home route
@app.route("/")
def form():
    if not "loggedIn" in session: #checks in the user is loggedIn
        return render_template("form.html") #renders login page
    else:
        return redirect("/welcome")

## Authorization for form input
@app.route("/auth", methods=["POST"])
def authenticate(): #checks username and password
    print(request.form)
    session['username']= request.form.get('username') #saves information in session
    session['password']= request.form.get('password')
    if session['username'] == "fredGang" and session['password'] == "softdev": #checks if username and password are correct
        session['loggedIn'] = True #stores the fact that the user is logged in in the session
        return redirect("/welcome")
    else:
        if session['username'] != "fredGang": #flashes messages clarifying username and password errors
            flash("Incorrect username")
        if session['password'] != "softdev":
            flash("Incorrect password")
        return redirect("/error")

## Welcome page
@app.route("/welcome")
def welcome():
    return render_template("welcome.html") #renders a welcome page

## Error page
@app.route("/error")
def error():
    return render_template("error.html") #renders an error page with flashed messages

## Logout from session
@app.route("/logout") #removes username and password from the session and indicates the user is logged out
def logout():
    session.pop('username')
    session.pop('password')
    session.pop('loggedIn')
    return redirect("/") #returns to the login page


if __name__ == "__main__":
    app.debug = True
    app.run()
