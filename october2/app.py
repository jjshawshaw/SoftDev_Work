from flask import Flask
from flask import render_template
from flask import request
from flask import session
import cgi
from flask import  url_for

app = Flask(__name__)

head = """
Justin Shaw & Tanzim Elahi
SoftDev1 pd1
K15 -- ?
2019-10-04
"""

@app.route("/")
def form():
    return render_template("temp.html",
                               header = head)

@app.route("/auth")
def authenticate():
    us = request.args['username']
    pw = request.args['password']
    if us == "fredGang"and pw == "softdev":
        redirect("/welcome")
    else:
        redirect("/error")

app.route("/welcome")
def welcome():
    print("/n/n/n")
    print("app: " + str(app))
    print("request: " + str(request))
    print("args: " + str(request.args))
    print(request.headers)
    return render_template("authTemp.html", username=request.args['username'],
                               method = request.method,
                               header = head)
app.route("/error"):
def error():
    print("wrong password or username")


app.route("/sesh")
def test():
    return session["username"]


if __name__ == "__main__":
    app.debug = True
    app.run()
