const db = require('../database')

exports.userLoad = async(req, res) => {

    const id = req.params.id;
    console.log(id)
    const selectConta = `SELECT * FROM contas WHERE id=?`

    db.query(selectConta, id, (err, results) => {
        if (err) {
            console.log(err)
        } else {
            console.log(results);
            res.send(results);
        }
    })
}

exports.contas = async(req, res) => {
    const sqlSelect = "SELECT * FROM contas"
    db.query(sqlSelect, (err, result) => {
        //console.log(result)
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}