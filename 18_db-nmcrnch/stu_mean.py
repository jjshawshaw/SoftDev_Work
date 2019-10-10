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

data = c.execute("SELECT name, students.id, mark FROM students, courses WHERE students.id = courses.id;")
for row in data.fetchall():
    print(row)

#==========================================================

db.commit() #save changes
db.close()  #close database
