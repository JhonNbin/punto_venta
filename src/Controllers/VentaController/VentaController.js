const express = require('express');

const router = express.Router();

router.get('/', function (req, res){
    res.send('todas las ventas');
});

module.exports = router;