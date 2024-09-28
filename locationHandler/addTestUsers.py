import sqlite3, time, math
from random import randrange
from os import system

try:
    con = sqlite3.connect("/home/johan/git/jole84.github.io/locationHandler/db.sqlite")
except:
    con = sqlite3.connect("/var/html/www/locationHandler/db.sqlite")

cur = con.cursor()

selectedRange = 1000

for i in range(selectedRange):
    userName = "testUser" + str(i + 1)
    timeStamp = math.ceil(time.time() * 1000) - randrange(10800000)
    coords = [randrange(1300000, 2700000), randrange(7000000, 10000000)]
    heading = randrange(628) / 100
    speed = randrange(120)
    cur.execute("INSERT OR REPLACE INTO locationData VALUES ('{}', {}, '{}', {}, 10, {})".format(userName, timeStamp, coords, heading, speed) )

con.commit()
system("sqlite3 db.sqlite 'select * from locationData;'")

def deleteAll ():
    ("sqlite3 db.sqlite 'delete from locationData;'")
# cur.execute("select * from locationData")
# print(cur.fetchall())
