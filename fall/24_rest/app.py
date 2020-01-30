from flask import Flask, render_template
from flask import request
import urllib, json

app = Flask(__name__)
api_key = "Xuy21dR3DcoLW4fSZUPOYQraMEyNr4AR4wBDHRKZ"
url = f"https://api.nasa.gov/planetary/apod?date=2019-10-31&api_key={api_key}"

@app.route("/")
def api_request():
    request = urllib.request.urlopen(url).read()
    print(request)
    parsed = json.loads(request)
    print(parsed)
    return render_template("api_request.html", to_render=parsed)



if __name__ == "__main__":
    app.debug = True
    app.run()
