#Justin Shaw and Clement Chan
#SoftDev p1
#K10 - Import/Export Bank
#2002-03-04

from pymongo import MongoClient
import pprint

client = MongoClient('localhost', 27017)  # default mongo port is 27017
db = client['entrances']
collection = db['entranceCollection']

#Returns entrances whose names contain the searched text
def get_by_name(search):
    return list(collection.find({"NAME": { "$regex" : search, "$options" : "i"}},{"NAME":1,"LINE":1,"the_geom":1,"_id":0}))

#Returns entrances that run the searched line
def get_by_line(search):
    return list(collection.find({"LINE": { "$regex" : str(search), "$options" : "i"}},{"NAME":1,"LINE":1,"the_geom":1,"_id":0}))

#Returns entrances where one can transfer between two searched lines
def get_by_transfer(search1, search2):
    return list(collection.find({"$and" : [{"LINE": { "$regex" : str(search1), "$options" : "i"}},{"LINE": { "$regex" : str(search2), "$options" : "i"}}]},{"NAME":1,"LINE":1,"the_geom":1,"_id":0}))



lim = 10 # limit of results
#terminal input 
pprint.pprint(get_by_name(input("Search by name:"))[0:lim])
pprint.pprint(get_by_line(input("Search by line:"))[0:lim])
pprint.pprint(get_by_transfer(input("Search by line:\nLine 1:"),input("Line 2:"))[0:lim])


