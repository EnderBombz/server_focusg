const express = require('express');
const router = express.Router();
const postController = require('../controllers/post')

router.post("/items/:table", postController.items);
router.post("/servico", postController.servico);
router.post("/CidadeEscala", postController.cidadeEscala);

router.post("/motoboy/:filtro", postController.motoboy)
router.post("/uber/:filtro", postController.uber)
router.post("/devolucao/:filtro", postController.devolucao)
router.post("/servExtra/:filtro", postController.controle);

module.exports = router;