from flask import Flask, render_template, request, redirect
from pymongo import MongoClient
import json

app = Flask(__name__)
client = MongoClient()
db = client.HoR

def loadFromFile():
    file = open("role.json", "r")
    lines = file.read()
    dictionary = json.loads(lines)
    for object in dictionary['objects']:
        db.government.insert_one(object)

#loadFromFile()

print('loaded!')

@app.route('/')
def main():
    return render_template('search.html')

@app.route('/results', methods=['POST'])
def results():
    if request.form['party'] and request.form['district']:
        r = db.government.find({'$and': [{'party': request.form['party']}, {'district': request.form['district']}]})
    elif request.form['party']:
        r = db.government.find({'party': request.form['party']})
    elif request.form['district']:
        r = db.government.find({'district': request.form['district']})
    else:
        return redirect('/')
    return render_template('results.html',
            results = r)

#------------- Subway entrances --------------#

def loadSub():
    #open json file and read
    data = {}
    with open("subway_entrances.json") as data_file:
        data = json.loads(data_file.read())
    #use the meta section of the json file to detirmine fields
    fields = []
    for field in data["meta"]["view"]["columns"]:
        fields.append(field["name"])
    #drop existing collection
    client.entrances.entranceCollection.drop()
    for entry in data["data"]:
        ins = {}
        for i in range(len(fields)):
            ins[fields[i]] = entry[i] #use fields to input data
        ins[fields[11]] = {"type" : "Point", "coordinates" : list(map(float, ins[fields[11]].strip("POINT (").strip(")").split()))}#save coordinates as an array
        client.entrances.entranceCollection.insert_one(ins) #puts information into a collection called entranceCollection

@app.route('/subway')
def sub():
    return render_template('subwaysearch.html')

if __name__ == '__main__':
    loadSub()
    app.debug=True
    app.run(host='0.0.0.0')
