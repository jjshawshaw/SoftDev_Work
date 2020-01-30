from flask import Flask
from flask import render_template
from flask import request
import cgi

app = Flask(__name__)

head = """
Emory Walsh & Justin Shaw
SoftDev1 pd1
K12 -- Echo Echo Echo
2019-09-26
"""

@app.route("/")
def form():
    return render_template("temp.html",
                               header = head)

@app.route("/auth")
def authenticate():
    print("/n/n/n")
    print("app: " + str(app))
    print("request: " + str(request))
    print("args: " + str(request.args))
    print(request.headers)
    return render_template("authTemp.html",
                               username=request.args['username'],
                               method = request.method,
                               header = head)


if __name__ == "__main__":
    app.debug = True
    app.run()
