from flask import Flask, render_template
from flask import request
import urllib, json

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")

@app.route("/restcountries")
def country_api_request():
    url = "https://restcountries.eu/rest/v2/alpha/tv"
    request = urllib.request.urlopen(url).read()
    print(request)
    parsed = json.loads(request)
    print(parsed)
    return render_template("country.html", to_render=parsed, title="restcountries API")

@app.route("/metcollection")
def met_api_request():
    url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/47389"
    request = urllib.request.urlopen(url).read()
    print(request)
    parsed = json.loads(request)
    print(parsed)
    return render_template("met.html", to_render=parsed, title="Met collection API")




if __name__ == "__main__":
    app.debug = True
    app.run()
