module.exports = function(db) {
    const { protect } = require('../../utils');

    const express = require('express');
    const router = express.Router();

    router.get('/:userQuery', (req, res) => {
        const userQuery = protect(req.params.userQuery);
        const query = "SELECT * FROM Aktivitaet WHERE Beschreibung LIKE ? OR Bezeichnung LIKE ?";

        db.query(query, [userQuery, userQuery], (err, results) => {
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
  