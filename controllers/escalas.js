const db = require("../database");

exports.segundaManha = (req, res) => {
    const sqlSelect = "SELECT fcs.id,fc.nome,fcs.periodo,fcs.diaSemana FROM focusgroupapp.cidades fc INNER JOIN focusgroupapp.cidades_escalas fcs ON fc.id = fcs.idCidade AND fcs.diaSemana = 'Segunda' AND fcs.periodo='Manhã'; "
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            res.send(result)
        }
    })
}

exports.segundaTarde = (req, res) => {
    const sqlSelect = "SELECT fcs.id,fc.nome,fcs.periodo,fcs.diaSemana FROM focusgroupapp.cidades fc INNER JOIN focusgroupapp.cidades_escalas fcs ON fc.id = fcs.idCidade AND fcs.diaSemana = 'Segunda' AND fcs.periodo='Tarde'; "
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            res.send(result)
        }
    })
}

exports.tercaManha = (req, res) => {
    const sqlSelect = "SELECT fcs.id,fc.nome,fcs.periodo,fcs.diaSemana FROM focusgroupapp.cidades fc INNER JOIN focusgroupapp.cidades_escalas fcs ON fc.id = fcs.idCidade AND fcs.diaSemana = 'Terca' AND fcs.periodo='Manha'; "
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            res.send(result)
        }
    })
}

exports.tercaTarde = (req, res) => {
    const sqlSelect = "SELECT fcs.id,fc.nome,fcs.periodo,fcs.diaSemana FROM focusgroupapp.cidades fc INNER JOIN focusgroupapp.cidades_escalas fcs ON fc.id = fcs.idCidade AND fcs.diaSemana = 'Terca' AND fcs.periodo='Tarde'; "
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            res.send(result)
        }
    })
}

exports.quartaManha = (req, res) => {
    const sqlSelect = "SELECT fcs.id,fc.nome,fcs.periodo,fcs.diaSemana FROM focusgroupapp.cidades fc INNER JOIN focusgroupapp.cidades_escalas fcs ON fc.id = fcs.idCidade AND fcs.diaSemana = 'Quarta' AND fcs.periodo='Manha'; "
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            res.send(result)
        }
    })
}

exports.quartaTarde = (req, res) => {
    const sqlSelect = "SELECT fcs.id,fc.nome,fcs.periodo,fcs.diaSemana FROM focusgroupapp.cidades fc INNER JOIN focusgroupapp.cidades_escalas fcs ON fc.id = fcs.idCidade AND fcs.diaSemana = 'Quarta' AND fcs.periodo='Tarde'; "
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            res.send(result)
        }
    })
}

exports.quintaManha = (req, res) => {
    const sqlSelect = "SELECT fcs.id,fc.nome,fcs.periodo,fcs.diaSemana FROM focusgroupapp.cidades fc INNER JOIN focusgroupapp.cidades_escalas fcs ON fc.id = fcs.idCidade AND fcs.diaSemana = 'Quinta' AND fcs.periodo='Manha'; "
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            res.send(result)
        }
    })
}

exports.quintaTarde = (req, res) => {
    const sqlSelect = "SELECT fcs.id,fc.nome,fcs.periodo,fcs.diaSemana FROM focusgroupapp.cidades fc INNER JOIN focusgroupapp.cidades_escalas fcs ON fc.id = fcs.idCidade AND fcs.diaSemana = 'Quinta' AND fcs.periodo='Tarde'; "
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            res.send(result)
        }
    })
}

exports.sextaManha = (req, res) => {
    const sqlSelect = "SELECT fcs.id,fc.nome,fcs.periodo,fcs.diaSemana FROM focusgroupapp.cidades fc INNER JOIN focusgroupapp.cidades_escalas fcs ON fc.id = fcs.idCidade AND fcs.diaSemana = 'Sexta' AND fcs.periodo='Manha'; "
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            res.send(result)
        }
    })
}

exports.sextaTarde = (req, res) => {
    const sqlSelect = "SELECT fcs.id,fc.nome,fcs.periodo,fcs.diaSemana FROM focusgroupapp.cidades fc INNER JOIN focusgroupapp.cidades_escalas fcs ON fc.id = fcs.idCidade AND fcs.diaSemana = 'Sexta' AND fcs.periodo='Tarde'; "
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            res.send(result)
        }
    })
}