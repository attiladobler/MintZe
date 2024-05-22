module.exports = function(db) {
    const { protect } = require('../../utils');

    const express = require('express');
    const router = express.Router();

    router.get('/:activityID', (req, res) => {
        const activityID = protect(req.params.activityID);
        const query = 'SELECT * FROM Aktivitaet, Faecher WHERE AktivitaetID = ? AND Aktivitaet.FachID = Faecher.ID';

        db.query(query, [activityID], (err, results) => {
            if (err) {
                console.error('Fehler bei der Abfrage:', err);
                res.status(500).send('Fehler bei der Abfrage');
                return;
            }
            res.json(results);
        });
    });

    return router;
};
  