module.exports = function(db) {
    const { protect, verifySchuelerLogin } = require('../../utils');

    const express = require('express');
    const router = express.Router();

    router.post('/', (req, res) => {
        const activityID = protect(req.body.activityID);
        const userName = protect(req.body.userName);
        const authKey = protect(req.body.authKey);
        
        if(verifySchuelerLogin == true) {
            const query = 'SELECT count(*) FROM nimmtTeil WHERE SchuelerID = ? AND AktivitaetID = ? AND Bestaetigt = 1';

            db.query(query, [userName, activityID], (err, results) => {
                if (err) {
                    console.error('Fehler bei der Abfrage:', err);
                    res.status(500).send('Fehler bei der Abfrage');
                    return;
                }
                res.json(results);
            });
        } else {
            res.status(500).send("You are not authenticated.")
        }
    });

    return router;
};
  