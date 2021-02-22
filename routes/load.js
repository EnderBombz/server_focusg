const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')
const getController = require('../controllers/get')
const filterController = require('../controllers/filtros')
const escalas = require('../controllers/escalas')

router.get("/hello", (req, res) => {
    res.send("ta_enviando_e_recebendo");
})

router.get("/perfil/:id", userController.userLoad);
router.get("/contas", userController.contas);

router.get("/cidades", getController.cidades);
router.get("/cidadesById", getController.cidadesById)
router.get("/CidadesEscalasById", getController.CidadesEscalasById)
router.get("/CidadesEscalas", getController.CidadesEscalas)

router.get("/colaboradores", getController.colaboradores)
router.get("/colaboradoresByName", getController.colaboradoresOrderByName)

router.get("/uberUsuarios", getController.uberUsuarios)
router.get("/uberUsuariosByName", getController.uberUsuariosOrderByName)

router.get("/departamento", getController.departamento);
router.get("/empresas", getController.empresas);
router.get("/empresasByName", getController.empresasByName);
router.get("/motoboys", getController.motoboys);
router.get("/servicos", getController.servicos);

router.get("/solicitacaoMotoboy/:filtro", getController.solicitacaoMotoboy)
router.get("/solicitacaoUber/:filtro", getController.solicitacaoUber)
router.get("/solicitacaoDevolucao/:filtro", getController.solicitacaoDevolucao)
router.get("/controleServicos/:filtro", getController.controleServicos)

router.get("/filtros/motoboy", filterController.motoboy);
router.get("/filtros/uber", filterController.uber);
router.get("/filtros/devolucao", filterController.devolucao);
router.get("/filtros/controle", filterController.controle);

router.get("/cidadeEscalaSegundaManha", escalas.segundaManha);
router.get("/cidadeEscalaSegundaTarde", escalas.segundaTarde);
router.get("/cidadeEscalaTercaManha", escalas.tercaManha);
router.get("/cidadeEscalaTercaTarde", escalas.tercaTarde);
router.get("/cidadeEscalaQuartaManha", escalas.quartaManha);
router.get("/cidadeEscalaQuartaTarde", escalas.quartaTarde);
router.get("/cidadeEscalaQuintaManha", escalas.quintaManha);
router.get("/cidadeEscalaQuintaTarde", escalas.quintaTarde);
router.get("/cidadeEscalaSextaManha", escalas.sextaManha);
router.get("/cidadeEscalaSextaTarde", escalas.sextaTarde);

router.get("/servicoValor/:servico", getController.servicoValor);

router.get("/api/get/verificaTableMotoboy", getController.verificaTableMotoboy);

module.exports = router;