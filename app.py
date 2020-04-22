# AlbertWan & Justin Shaw
# SoftDev2 pd9
# K18: Come Up For Air
# 2020-04-20

from flask import Flask, render_template, jsonify
import csv
app = Flask(__name__)
@app.route("/")
def root():
    return render_template("index.html", data = data());

#reads in data from the CSV file
def data():
    data = []
    with open("static/tomato.csv") as csv_file:
        reader = csv.reader(csv_file)
        next(reader)
        for entry in reader:

            ["Year", "Score", "Title"]
            data.append({"Year": int(entry[0]), "Score": int(entry[1]), "Title": entry[2].strip().strip("\"")})

    return data


if __name__ == "__main__":
    app.debug = True
    app.run()
