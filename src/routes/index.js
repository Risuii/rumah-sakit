var express = require('express');
var router = express.Router();

const ambilNomor = require('./pendaftaran');
const list = require('./listPengunjung');
const detail = require('./detailPenungjung');

router.use('/v1', ambilNomor)
router.use('/v1', list)
router.use('/v1', detail)

module.exports = router;
