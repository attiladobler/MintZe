module.exports = function() {
    const { passwordHash } = require('../../utils');

    const express = require('express');
    const router = express.Router();

    router.get('/:password', (req, res) => {
        const password = protect(req.params.password);

        res.send(passwordHash(password));
    });

    return router;
};