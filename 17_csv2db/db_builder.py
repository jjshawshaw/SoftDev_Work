#Clyde "Thluffy" Sinclair
#SoftDev
#skeleton :: SQLITE3 BASICS
#Oct 2019

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="students.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

#==========================================================

# < < < INSERT YOUR POPULATE-THE-DB CODE HERE > > >
def tablify(dbName, tableName, fileName):
    dbName="studentDB.db"
    tableName="students"
    fileName="students.csv"
    c.execute(f".open {dbName}")
    with open("students.csv") as f:
        reader = csv.DictReader(f)
        lineCount = 0
        for row in reader:
            if (lineCount = 0):
                c.execute(f"""
                    CREATE TABLE [IF NOT EXISTS] {tableName}(
                        {row.keys()[0]} TEXT
                        {row.keys()[1]} INTEGER
                        {row.keys()[2]} INTEGER
                    )
                """)
                lineCount += 1
            else:
                c.execute(f"""
                INSERT INTO {tableName}
                VALUES({row.keys()[0]}, {row.keys()[1]}, {row.keys()[2]})
                """



        # test SQL stmt in sqlite3 shell, save as string
   # run SQL statement

#==========================================================

db.commit() #save changes
db.close()  #close database
