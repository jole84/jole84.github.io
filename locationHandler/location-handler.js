// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const dbFile = 'db.sqlite';
const maxAgeMS = 3 * 60 * 60 * 1000; // 3 timmar

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 🗃️ Anslut till SQLite-databasen
const db = new sqlite3.Database(dbFile, (err) => {
  if (err) {
    console.error(`Failed to connect to database: ${err.message}`);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// 🏗️ Skapa tabell om den inte finns
db.run(`
  CREATE TABLE IF NOT EXISTS locationData (
    userName TEXT PRIMARY KEY NOT NULL,
    timeStamp INTEGER NOT NULL,
    x INTEGER,
    y INTEGER,
    heading INTEGER,
    accuracy INTEGER,
    speed INTEGER
  )
`);

// 📥 POST-endpoint för att ta emot data
app.post('/location', (req, res) => {
  const { userName, timeStamp, x, y, heading, accuracy, speed } = req.body;

  if (userName) {
    // Insert or replace
    db.run(`
      INSERT OR REPLACE INTO locationData 
      (userName, timeStamp, x, y, heading, accuracy, speed)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [userName, timeStamp, x, y, heading, accuracy, speed]);
  }

  // 🧹 Rensa gamla poster
  const currentTime = Date.now();
  db.run(`
    DELETE FROM locationData
    WHERE ? - timeStamp > ?
  `, [currentTime, maxAgeMS]);

  // 📤 Läs data (exkludera aktuell användare)
  db.all(`
    SELECT * FROM locationData
    WHERE userName IS NOT ?
    ORDER BY timeStamp
  `, [userName], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// 🚀 Starta servern
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
