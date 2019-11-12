from flask import Flask, render_template
from flask import request
import

app = Flask(__name__)


@app.route("/")
def hello_world():
    print(__name__)
    return "uwu"


if __name__ == "__main__":
    app.debug = True
    app.run()
