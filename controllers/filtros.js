const db = require('../database')

exports.motoboy = (req, res) => {
    const sqlSelect = `SELECT * FROM filtro_mes_ano_motoboy`;
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
}

exports.uber = (req, res) => {
    const sqlSelect = `SELECT * FROM filtro_mes_ano_uber`;
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
}

exports.devolucao = (req, res) => {
    const sqlSelect = `select * from filtro_mes_ano_devolucao`;
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
}

exports.controle = (req, res) => {
    const sqlSelect = `select * from filtro_mes_ano_servicos_extras`;
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
}