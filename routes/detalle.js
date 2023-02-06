var express = require('express');
var router = express.Router();
const controller = require("../controllers/detalleController")

/* GET users listing. */
router.get('/:id', controller.detallePorId);

module.exports = router;
