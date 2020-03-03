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
    db.entranceCollection.insert_one(ins)
