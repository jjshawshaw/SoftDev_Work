from flask import Flask
from flask import render_template
from flask import request
import cgi

app = Flask(__name__)

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
    us= request.args['username']
    pw= request.args['password']
    if us == "fredGang" and pw == "softdev":
        return "Welcome"
    else:
        return "Error"




if __name__ == "__main__":
    app.debug = True
    app.run()
