const express = require('express');
const router = express.Router();
const deleteController = require('../controllers/delete')

router.delete("/controller/:table/:id", deleteController.id);
router.delete("/CidadeEscala/:id", deleteController.deleteCidadeEscala);
router.delete("/solicitacaoMotoboy/:id/:filtro", deleteController.solicitacaoMotoboy);
router.delete("/uber/:id/:filtro", deleteController.uber);
router.delete("/solicitacaoDevolucao/:id/:filtro", deleteController.solicitacaoDevolucao);
router.delete("/controleServico/:id/:filtro", deleteController.controleServico);

module.exports = router;