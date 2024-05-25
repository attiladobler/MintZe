module.exports = function() {
    const { passwordHash } = require('../../utils');

    const express = require('express');
    const router = express.Router();

    router.post('/', (req, res) => {
        console.log("POST")
        const password = req.body.password;
        console.log(password)

        const hashedPassword = passwordHash(password);

        res.send(hashedPassword);
    });

    return router;
};