const db = require("../database");

exports.items = async(req, res) => {
    const { nome } = req.body
    const table = req.params.table
    const sqlInsert = `INSERT INTO ${table}(nome)VALUES(?)`;
    await db.query(sqlInsert, nome, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log("teste")
            console.log(result)
            res.send({ message: "success" })
        }
    })
}

exports.servico = async(req, res) => {
    const { tipoServico, valorServico } = req.body
    console.log({ tipoServico, valorServico })
    const sqlInsert = `INSERT INTO servicos(tipoServico,valorServico)VALUES(?,?)`;
    await db.query(sqlInsert, [tipoServico, valorServico], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log("teste")
            res.send({ message: "success" })
            console.log(result)
        }
    })
}

exports.cidadeEscala = async(req, res) => {
    let idCidade = req.body.idCidade;
    let periodo = req.body.periodo;
    let diaSemana = req.body.diaSemana;

    const sqlInsert = `INSERT INTO cidades_escalas(idCidade,periodo,diaSemana)VALUES(?,?,?)`
    await db.query(sqlInsert, [idCidade, periodo, diaSemana], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send({ message: "success" })
            console.log(idCidade + "foi inserido(a) com suscesso!");
        }
    })
}

exports.motoboy = async(req, res) => {

    console.log("--- Entrou no post do motoboy ---");
    let { filtro } = req.params;
    let { solicitacao } = req.body

    console.log(filtro)
    console.log(solicitacao)
    const empresa = solicitacao.empresa;

    let date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth() + 1;
    let ano = date.getFullYear();
    let hora = date.getHours();
    let minutos = date.getMinutes();

    let dataComp = `${dia}/${mes}/${ano} ${hora}:${minutos}`;
    console.log(dataComp);

    const sqlInsert = `INSERT INTO solicitacao_motoboy_${filtro}(colaborador,periodo,departamento,cidade,data,dataCadastro,assunto,empresa,observacao,urgente,status)VALUES(?,?,?,?,?,?,?,?,?,?,'Pendente')`
    await db.query(sqlInsert, [
        solicitacao.colaborador,
        solicitacao.periodo,
        solicitacao.departamento,
        solicitacao.cidade,
        solicitacao.data,
        solicitacao.dataComp,
        solicitacao.assunto,
        empresa,
        solicitacao.observacao,
        solicitacao.urgente,
    ], (err, result) => {

        if (err) {
            console.log(err)
        } else {
            res.send({ message: "success" })
                //console.log("|" + colaborador + "|\n" + "|" + periodo + "|\n" + "|" + departamento + "|\n" + "|" + empresa + "|\n" + "|" + assunto + "|\n" + "|" + cidade + "|\n" + "|" + urgente + "|\n" + "|" + data + "|\n" + "|" + observacao + "|\n" + "\n\nOs dados foram inseridos com sucesso foram inseridos com sucesso!");
        }
    })
}

exports.uber = async(req, res) => {

    let filtro = req.params.filtro;

    let dataSolicitacao = req.body.dataSolicitacao;
    let usuario = req.body.usuario;
    let empresa = req.body.empresa;
    let cidade = req.body.cidade;
    let assunto = req.body.assunto;
    let horaIda = req.body.horaIda;
    let placaUberIda = req.body.placaUberIda;
    let valorUberIda = req.body.valorUberIda;
    let conclusao = "Pendente";

    const sqlInsert = `INSERT INTO solicitacao_uber_${filtro}(dataSolicitacao,usuario,empresa,cidade,assunto,horaIda,placaUberIda,valorUberIda,conclusao)VALUES(?,?,?,?,?,?,?,?,?)`
    await db.query(sqlInsert, [dataSolicitacao, usuario, empresa, cidade, assunto, horaIda, placaUberIda, valorUberIda, conclusao], (err, result) => {

        if (err) {
            console.log(err)
        } else {
            console.log("|" + dataSolicitacao + "|\n" + "|" + usuario + "|\n" + "|" + empresa + "|\n" + "|" + cidade + "|\n" + "|" + assunto + "|\n" + "|" + horaIda + "|\n" + "|" + placaUberIda + "|\n" + "|" + valorUberIda + "|\n" + "|" + valorUberIda + "|\n" + conclusao + "|\n" + "\n\nOs dados foram inseridos com sucesso foram inseridos com sucesso!");
        }
    })
}

exports.devolucao = async(req, res) => {

    let filtro = req.params.filtro;

    let colaboradorReq = req.body.colaborador;
    let periodoReq = req.body.periodo;
    let empresaReq = req.body.empresa;
    let cidadeReq = req.body.cidade;
    let tipoReq = req.body.tipo;
    let quantidadeReq = parseInt(req.body.quantidade);
    let observacaoReq = req.body.observacao;
    //let dataReq = req.body.data;
    let motoboyReq = req.body.motoboy;
    let data_cadastroReq = req.body.data_cadastro;

    const sqlInsert = `INSERT INTO solicitacao_devolucao_${filtro}(data_cadastro,colaborador,periodo,empresa,cidade,tipo,quantidade,motoboy,observacao)VALUES(?,?,?,?,?,?,?,?,?)`
    await db.query(sqlInsert, [data_cadastroReq, colaboradorReq, periodoReq, empresaReq, cidadeReq, tipoReq, quantidadeReq, motoboyReq, observacaoReq], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send({ message: "success" })
            console.log([data_cadastroReq, colaboradorReq, periodoReq, empresaReq, cidadeReq, tipoReq, quantidadeReq, motoboyReq, observacaoReq] + "\n\nOs dados foram inseridos com sucesso foram inseridos com sucesso!");
        }
    })
}

exports.controle = async(req, res) => {

    let filtro = req.params.filtro;

    let data = req.body.data
    let mesRef = req.body.mesRef
    let cliente = req.body.cliente
    let servico_realizado = req.body.servico_realizado
    let quantidade = req.body.quantidade
    let nome = req.body.nome
    let status = req.body.status
    let departamento = req.body.departamento
    let financeiro = req.body.financeiro
    let valorUnit = req.body.valorUnit
    let valorTotal = req.body.valorTotal
    let observacao = req.body.observacao

    let date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth() + 1;
    let ano = date.getFullYear();
    let hora = date.getHours();
    let minutos = date.getMinutes();

    let dataComp = `${dia}/${mes}/${ano} ${hora}:${minutos}`;
    console.log(dataComp);

    const sqlInsert = `INSERT INTO controle_servicos_extras_${filtro}(data,mesRef,cliente,servico_realizado,quantidade,nome,status,departamento,financeiro,valorUnit,valorTotal,observacao,dataCadastro)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`
    await db.query(sqlInsert, [data, mesRef, cliente, servico_realizado, quantidade, nome, status, departamento, financeiro, valorUnit, valorTotal, observacao, dataComp], (err, result) => {

        if (err) {
            console.log(err)
        } else {
            res.send({ message: "success" })
            console.table([data, mesRef, cliente, servico_realizado, quantidade, nome, status, departamento, financeiro, valorUnit, valorTotal, observacao, dataComp])
            console.log("Os dados foram inseridos com sucesso foram inseridos com sucesso!");
        }
    })
}