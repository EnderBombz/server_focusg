const db = require('../database')

exports.id = (req, res) => {
    const id = req.params.id
    const table = req.params.table
    const sqlDelete = `DELETE FROM ${table} WHERE id=?`
    db.query(sqlDelete, id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
}

exports.deleteCidadeEscala = (req, res) => {
    const id = req.params.id;
    const sqlDelete = `DELETE FROM cidades_escalas WHERE id = ?`;
    db.query(sqlDelete, id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(id + " foi removido com sucesso!")
        }
    })
}

exports.solicitacaoMotoboy = (req, res) => {
    const id = req.params.id;
    let filtro = req.params.filtro;
    const sqlDelete = `DELETE FROM solicitacao_motoboy_${filtro} WHERE id = ?`;
    db.query(sqlDelete, id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(id + " foi removido com sucesso!")
        }
    })
}

exports.uber = (req, res) => {
    const id = req.params.id;
    const filtro = req.params.filtro
    console.log(id, filtro)

    const sqlDelete = `DELETE FROM solicitacao_uber_${filtro} WHERE id = ?`;
    db.query(sqlDelete, id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(id + " foi removido com sucesso!")
        }
    })
}

exports.solicitacaoDevolucao = (req, res) => {
    const id = req.params.id;
    const filtro = req.params.filtro;

    const sqlDelete = `DELETE FROM solicitacao_devolucao_${filtro} WHERE id = ?`;
    db.query(sqlDelete, id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(id + " foi removido com sucesso!")
        }
    })
}

exports.controleServico = (req, res) => {
    const id = req.params.id;
    const filtro = req.params.filtro

    console.log(id, filtro);

    const sqlDelete = `DELETE FROM controle_servicos_extras_${filtro} WHERE id = ?`;
    db.query(sqlDelete, id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(id + " foi removido com sucesso!")
        }
    })
}