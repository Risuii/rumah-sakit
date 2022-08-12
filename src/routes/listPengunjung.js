var express = require('express');

const router = express.Router();

const list = require('../controller/listPengunjung')

router.get('/list', list.listPengunjung)

module.exports = router;