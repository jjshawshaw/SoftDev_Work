#Team: Will Not Be Late Again
#SoftDev pd1
#K10 -- Jinja Tuning
#2019 09 23
import csv
import random
import itertools
from flask import Flask, render_template
jobDict = dict() #global variable for ez access

def updateDict():
    with open("occupations.csv") as file:
        next(file)
        reader = csv.reader(file)
        for row in reader:
            temp_arr = [float(row[1]), row[2]]
            jobDict[row[0]] = temp_arr #should create an array  with float + link
    del jobDict["Total"] #THIS IS THE MOST PYTHONIC WAY NON-NEGOTIABLE

def randomSel():
    tempVals = list()
    for array in jobDict.values():
        tempVals.append(array[0])
    valList = list((itertools.accumulate(tempVals, lambda x, y: x + y))) # cumulatively sums the percentages in the csv so as to create a range from 0- 98.8 of employed people
    #divides up the 99.8 as defined by the csv
    keyList = list(jobDict.keys())
    randomPercent = random.uniform(0,99.8)
    for x in range(0, len(valList)):
        if valList[x] > randomPercent: #checks if in range of percetnages in list
            if keyList[x - 1] is not None:
                return keyList[x - 1] #Checks if None
            else:
                return "Unemployed"


app = Flask(__name__)

@app.route("/templates")
def staticTest(): #static page for when the server is opened
    return render_template('home.html',
                           collection=[0,1,1,2,3,5,8],
                           foo="moo"
                           )

@app.route("/occupyflaskst")
def jobPrinter(): #returns the output of the parsed css into a html file
    updateDict()
    randomSel()
    return render_template('occ.html', job_Dict = jobDict, randomSelection = randomSel())

if __name__ == "__main__":
    app.debug = True
    app.run()
