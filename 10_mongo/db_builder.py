import json
from pymongo import MongoClient

data = {}
with open("subway_entrances.json") as data_file:
    data = json.loads(data_file.read())


fields = []
for field in data["meta"]["view"]["columns"]:
    fields.append(field["name"])


client = MongoClient('localhost', 27017)
db = client["entrances"]
for entry in data["data"]:
    ins = {}
    for i in range(len(fields)):
        ins[fields[i]] = entry[i]
    ins[fields[11]] = ins[fields[11]].strip("POINT (").strip(")").split()
    db.entranceCollection.insert_one(ins)
