const db = require("../database");

exports.conta = (req, res) => {
    const id = req.params.id
    const { departamento, nivel } = req.body;
    const sqlUpdate = "UPDATE contas SET departamento = ?, nivel = ? WHERE id = ?"
    db.query(sqlUpdate, [departamento, nivel, id], (err, result) => {
        if (err) {
            console.log(err.code)
        } else {
            console.log("atualizado")
        }
    })
}

exports.items = (req, res) => {
    const id = req.params.id
    const table = req.params.table
    const { nome } = req.body;

    const sqlUpdate = `UPDATE ${table} SET nome = ? WHERE id = ?`
    db.query(sqlUpdate, [nome, id], (err, result) => {
        if (err) {
            console.log(err.code)
        } else {
            console.log("atualizado")
        }
    })
}


exports.servico = (req, res) => {
    const id = req.body.id
    const tipoServico = req.body.tipoServico
    const valorServico = req.body.valorServico;
    console.log(valorServico, tipoServico, id)

    const sqlUpdate = `UPDATE servicos SET tipoServico = ?,valorServico = ? WHERE id = ?`
    db.query(sqlUpdate, [tipoServico, valorServico, id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log("atualizado")
        }
    })
}
exports.solicitacaoMotoboy = (req, res) => {

    let filtro = req.params.filtro;

    const { status, motoboy, id, data } = req.body
    console.log(id, data);

    const sqlUpdate = `UPDATE solicitacao_motoboy_${filtro} SET status = ?,motoboy = ?,data = ? WHERE id= ?`;
    db.query(sqlUpdate, [status, motoboy, data, id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(id + " foi atualizado com sucesso!")
        }
    })
}

exports.uber = (req, res) => {

    let filtro = req.params.filtro;

    const id = req.body.id;
    const horaUberVolta = req.body.horaVolta;
    const valorUberVolta = req.body.valorUberVolta;
    const placaUberVolta = req.body.placaUberVolta;
    const conclusao = req.body.conclusao;

    console.log(id);

    const sqlUpdate = `UPDATE solicitacao_uber_${filtro} SET horaVolta = ?,placaUberVolta = ?,valorUberVolta = ?,conclusao=? WHERE id= ?`;
    db.query(sqlUpdate, [horaUberVolta, placaUberVolta, valorUberVolta, conclusao, id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(id + " foi atualizado com sucesso!")
        }
    })
}

exports.cidadeEscala = (req, res) => {

    const id = req.body.id
    const nomeCidade = req.body.nome;
    const periodo = req.body.periodo;
    const diaSemana = req.body.diaSemana;
    let idCidade;

    console.log(id);

    const sqlSelect = `SELECT id FROM cidades WHERE nome = ?`
    db.query(sqlSelect, nomeCidade, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result[0].id)
            idCidade = result[0].id;



            const sqlUpdate = `UPDATE cidades_escalas SET idCidade = ?, periodo = ?, diaSemana = ? WHERE id = ?`;
            db.query(sqlUpdate, [idCidade, periodo, diaSemana, id], (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(id + " foi atualizado com sucesso!")
                }
            })
        }
    })

}

exports.solicitacaoDevolucao = (req, res) => {

    const filtro = req.params.filtro

    const id = req.body.id;
    const status = req.body.status;
    const motoboy = req.body.motoboy;
    const data = req.body.data;

    console.log(filtro, id, status, motoboy);

    const sqlUpdate = `UPDATE solicitacao_devolucao_${filtro} SET status = ?, motoboy = ? ,data=?WHERE id = ?`;
    db.query(sqlUpdate, [status, motoboy, data, id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(id + " foi atualizado com sucesso!")
        }
    })
}

exports.controleServico = (req, res) => {

    let filtro = req.params.filtro;

    const id = req.body.id;
    const status = req.body.status
    const quantidade = req.body.quantidade
    const valorUnit = req.body.valorUnit
    const valorTotal = req.body.valorTotal
    const data = req.body.data

    console.log(id);

    const sqlUpdate = `UPDATE controle_servicos_extras_${filtro} SET status=?,quantidade=?,valorUnit=?,valorTotal=?,data=? WHERE id= ?`;
    db.query(sqlUpdate, [status, quantidade, valorUnit, valorTotal, data, id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(id + " foi atualizado com sucesso!")
        }
    })
}