const express = require('express');
const router = express.Router();
const createTableController = require('../controllers/createTableController')

router.use("/tableMotoboy", createTableController.motoboy);
router.use("/tableUber", createTableController.uber);
router.use("/tableDevolucao", createTableController.devolucao);
router.use("/tableServicosExtras", createTableController.servicos);


module.exports = router;