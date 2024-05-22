const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

/*const db = mysql.createConnection({
  host: '<YOUR HOST IP>',
  user: '<YOUR USERNAME>',
  password: '<YOUR PASSWORD>',
  database: '<DATABASE NAME>'
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
});*/

app.listen(port, () => {
  console.log(`Server läuft unter http://localhost:${port}`);
});

/*const activityInformations = require('./routes/get/activityInformations')(db);
const allActivities = require('./routes/get/allActivities')(db);
const getMessages = require('./routes/post/getMessages')(db);*/
const hashPassword = require('./routes/get/hashPassword');/*
app.use('/activityInformations', activityInformations);
app.use('/allActivities', allActivities);
app.use('/getMessages', getMessages);*/
app.use('/hashPassword', hashPassword);