#Justin Shaw
#SoftDev1 pd1
#K17 -- No Trouble
#2019-10-10

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"
db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

#==========================================================


## creates student table if the table does not exist
c.execute("CREATE TABLE IF NOT EXISTS students(name TEXT, age INTEGER, id INTEGER);")
with open("students.csv") as csvFile: #read in student.csv
    reader = csv.DictReader(csvFile) #create DictReader
    for row in reader:
        c.execute(f"INSERT INTO students VALUES (\"{row['name']}\", {row['age']}, {row['id']});")
            #insert each row into the student table

## creates courses table if the table does not exist
c.execute("CREATE TABLE IF NOT EXISTS courses(code TEXT, mark INTEGER, id INTEGER);")
with open("courses.csv") as csvFile: #read in courses.csv
    reader = csv.DictReader(csvFile) #create DictReader
    for row in reader:
        c.execute(f"INSERT INTO courses VALUES (\"{row['code']}\", {row['mark']}, {row['id']});")
            #insert each row into the courses table

#==========================================================

db.commit() #save changes
db.close()  #close database
