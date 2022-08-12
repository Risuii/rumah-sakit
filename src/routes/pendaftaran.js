var express = require('express');

const router = express.Router();

const ambilNomor = require('../controller/pendaftaran')

router.post('/register', ambilNomor.pendaftaran)

module.exports = router;
