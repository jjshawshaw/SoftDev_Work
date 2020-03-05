#Justin Shaw and Clement Chan
#SoftDev p1
#K10 - Import/Export Bank
#2020-03-04

# data from https://catalog.data.gov/dataset/subway-entrances
# Subway Entrances: contains the names, subway lines, and coordinates of all subway entrances in New York City,

import json
from pymongo import MongoClient

#open json file and read
data = {}
with open("subway_entrances.json") as data_file:
    data = json.loads(data_file.read())

#use the meta section of the json file to detirmine fields
fields = []
for field in data["meta"]["view"]["columns"]:
    fields.append(field["name"])

#opens a client and creates a database called entrances
client = MongoClient('localhost', 27017)
db = client["entrances"]
for entry in data["data"]:
    ins = {}
    for i in range(len(fields)):
        ins[fields[i]] = entry[i] #use fields to input data
    ins[fields[11]] = ins[fields[11]].strip("POINT (").strip(")").split() #save coordinates as an array
    db.entranceCollection.insert_one(ins) #puts information into a collection called entranceCollection
