const express = require('express');
const putController = require('../controllers/put');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("hellou")
})

router.put("/conta/:id", putController.conta)
router.put("/controller/:table/:id", putController.items)
router.put("/controller/servico", putController.servico)

router.put("/CidadeEscala", putController.cidadeEscala)
router.put("/solicitacaoMotoboy/:filtro", putController.solicitacaoMotoboy)
router.put("/uber/:filtro", putController.uber)

router.put("/solicitacaoDevolucao/:filtro", putController.solicitacaoDevolucao)
router.put("/controleServico/:filtro", putController.controleServico)

module.exports = router;