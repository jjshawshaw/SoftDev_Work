from flask import Flask, render_template
import urllib2, json

app = Flask(__name__)
api_key = "Xuy21dR3DcoLW4fSZUPOYQraMEyNr4AR4wBDHRKZ"
date = "2019-10-31"
url = f"https://api.nasa.gov/planetary/apod?date={date}&hd=True&api_key={api_key}"


@app.route("/")
def hello_world():
    print(__name__)
    print(f"requesting from {url}")


if __name__ == "__main__":
    app.debug = True
    app.run()
