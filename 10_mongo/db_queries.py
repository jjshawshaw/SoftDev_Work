from pymongo import MongoClient
import pprint

client = MongoClient('localhost', 27017)  # default mongo port is 27017
db = client['entrances']
collection = db['entranceCollection']
