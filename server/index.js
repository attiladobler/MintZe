const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: '10.16.2.100',
  user: 'root',
  password: 'dein_passwort',
  database: 'mintze'
});

db.connect(error => {
  if (error) {
    console.error('Fehler bei der Verbindung zur Datenbank:', error);
    return;
  }
  console.log('Mit der Datenbank verbunden');

  app.listen(port, () => {
    console.log(`Server läuft unter http://localhost:${port}`);
  });
});

const activityInformations = require('./routes/get/activityInformations')(db);
const allActivities = require('./routes/get/allActivities')(db);
app.use('/activityInformations', activityInformations);
app.use('/allActivities', allActivities);