import json
from pymongo import MongoClient

data = {}
with open("subway_entrances.json") as data_file:
    data = json.loads(data_file.read())


for i in data["meta"]["view"]["columns"]:
    print(i)
