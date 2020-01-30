#Justin Shaw and Michael Lin
#SoftDev1 pd1
#K18 -- Average
#2019-10-15

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O
import statistics


DB_FILE="discobandit.db"
db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

#==========================================================

#access the students and courses tables from the database
data = c.execute("SELECT name, students.id, mark FROM students, courses WHERE students.id = courses.id;")
grades = {} #creates empty dictionaries to store grades and ids
ids = {}
for row in data.fetchall(): #fetches selected data from database
    if row[0] not in grades: #addes grades to list inside dictionary
        grades[row[0]] = [row[2],]
    else:
        grades[row[0]].append(row[2])
    if row[1] not in ids: #stores student ids inside dictionary
        ids[row[0]] = row[1]
print("Averages")
c.execute("CREATE TABLE IF NOT EXISTS stu_avg(name TEXT, id INTEGER, avg INTEGER);") #creates a table to store averages
for student in grades:
    print(f"{student} (id: {ids[student]}): {statistics.mean(grades[student]):.2f}") #prints averages and ids
    c.execute(f"INSERT INTO courses VALUES (\"{student}\", {ids[student]}, {statistics.mean(grades[student]):.2f});")
    #inserts averages and ids into stu_avg table


#==========================================================

db.commit() #save changes
db.close()  #close database
