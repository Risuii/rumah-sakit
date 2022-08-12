var express = require('express');

const router = express.Router();

const detailPengunjung = require('../controller/detailPengunjung')

router.get('/detail/:id', detailPengunjung.detailPengunjung)

module.exports = router;