const db = require('../database')

exports.cidades = async(req, res) => {
    const sqlSelect = "SELECT * FROM cidades"
    await db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}

exports.cidadesById = (req, res) => {
    const sqlSelect = `SELECT * FROM cidades  ORDER BY id`
    db.query(sqlSelect, (err, result) => { res.send(result) })
}

exports.cidadesByName = (req, res) => {
    const sqlSelect = `SELECT * FROM cidades  ORDER BY nome`
    db.query(sqlSelect, (err, result) => { res.send(result) })
}


exports.CidadesEscalas = (req, res) => {
    const sqlSelect = "SELECT fcs.id,fc.nome,fcs.idCidade,fcs.periodo,fcs.diaSemana FROM focusgroupapp.cidades fc INNER JOIN focusgroupapp.cidades_escalas fcs ON fc.id = fcs.idCidade"
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}

exports.CidadesEscalasById = (req, res) => {
    const sqlSelect = "SELECT fcs.id,fc.nome,fcs.idCidade,fcs.periodo,fcs.diaSemana FROM focusgroupapp.cidades fc INNER JOIN focusgroupapp.cidades_escalas fcs ON fc.id = fcs.idCidade ORDER BY ID"
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}

exports.CidadesEscalasByName = (req, res) => {
    const sqlSelect = "SELECT fcs.id,fc.nome,fcs.idCidade,fcs.periodo,fcs.diaSemana FROM focusgroupapp.cidades fc INNER JOIN focusgroupapp.cidades_escalas fcs ON fc.id = fcs.idCidade ORDER BY nome"
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}

exports.colaboradores = async(req, res) => {
    const sqlSelect = "SELECT * FROM colaboradores"
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
        } else {

            res.send(result)
        }
    })
}

exports.colaboradoresOrderByName = (req, res) => {
    const sqlSelect = `SELECT * FROM colaboradores ORDER BY nome`
    db.query(sqlSelect, (err, result) => { res.send(result) })
}

exports.uberUsuarios = async(req, res) => {
    const sqlSelect = "SELECT * FROM uber_usuarios"
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
        } else {

            res.send(result)
        }
    })
}

exports.uberUsuariosOrderByName = async(req, res) => {
    const sqlSelect = "SELECT * FROM uber_usuarios ORDER BY nome"
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
        } else {

            res.send(result)
        }
    })
}


exports.departamento = async(req, res) => {
    const sqlSelect = "SELECT * FROM departamento"
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
        } else {

            res.send(result)
        }
    })
}

exports.departamentoByName = async(req, res) => {
    const sqlSelect = "SELECT * FROM departamento ORDER BY nome"
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
        } else {

            res.send(result)
        }
    })
}

exports.empresas = async(req, res) => {
    const sqlSelect = "SELECT * FROM empresas ORDER BY nome"
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
        } else {

            res.send(result)
        }
    })
}

exports.empresasByName = async(req, res) => {
    const sqlSelect = "SELECT * FROM empresas ORDER BY nome"
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
        } else {

            res.send(result)
        }
    })
}


exports.motoboys = async(req, res) => {
    const sqlSelect = "SELECT * FROM motoboys"
    await db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
        } else {

            res.send(result)
        }
    })
}

exports.motoboysByName = async(req, res) => {
    const sqlSelect = "SELECT * FROM motoboys ORDER BY nome"
    await db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
        } else {

            res.send(result)
        }
    })
}


exports.solicitacaoMotoboy = (req, res) => {
    let filtro = req.params.filtro
    const sqlSelect = `SELECT * FROM solicitacao_motoboy_${filtro}`
    db.query(sqlSelect, filtro, (err, result) => { res.send(result) })
}
exports.solicitacaoUber = (req, res) => {

    let filtro = req.params.filtro
    const sqlSelect = `SELECT * FROM solicitacao_uber_${filtro}`
    db.query(sqlSelect, filtro, (err, result) => { res.send(result) })
}

exports.solicitacaoDevolucao = (req, res) => {

    let filtro = req.params.filtro
    const sqlSelect = `SELECT * FROM solicitacao_devolucao_${filtro} ORDER BY id`;
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err.code)
        } else {
            res.send(result)
        }
    })
}
exports.controleServicos = (req, res) => {

    let filtro = req.params.filtro
    const sqlSelect = `SELECT * FROM controle_servicos_extras_${filtro} ORDER BY id`;
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}



exports.servicos = async(req, res) => {
    const sqlSelect = "SELECT * FROM servicos"
    await db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
        } else {

            res.send(result)
        }
    })
}

exports.servicosByName = async(req, res) => {
    const sqlSelect = "SELECT * FROM servicos ORDER BY tipoServico"
    await db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
        } else {

            res.send(result)
        }
    })
}

exports.servicoValor = (req, res) => {

    const tipoServico = (req.params.servico).replace("_", "/");

    console.log('\n--------------\n' + tipoServico + '\n---------------\n');

    const sqlSelect = `SELECT * FROM servicos WHERE tipoServico LIKE '%${tipoServico}%' LIMIT 1`;
    console.log("\n" + sqlSelect + "\n");
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result);
            res.json(result)
        }
    })
}

exports.verificaTableMotoboy = (req, res) => {

    let data = new Date();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    let mesAno = mes + "_" + ano;

    const sqlSelect = `SELECT TABLE_NAME 
    FROM INFORMATION_SCHEMA.TABLES
    WHERE TABLE_NAME LIKE '%solicitacao_motoboy_${mesAno}%'`

    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result);
            console.log(result.length);
            res.send({ table_name: result, size: result.length });
        }
    })

}

exports.verificaTableUber = (req, res) => {

    let data = new Date();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    let mesAno = mes + "_" + ano;

    const sqlSelect = `SELECT TABLE_NAME 
    FROM INFORMATION_SCHEMA.TABLES
    WHERE TABLE_NAME LIKE '%solicitacao_uber_${mesAno}%'`

    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result);
            console.log(result.length);
            res.send({ table_name: result, size: result.length });
        }
    })

}


exports.verificaTableDevolucao = (req, res) => {

    let data = new Date();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    let mesAno = mes + "_" + ano;

    const sqlSelect = `SELECT TABLE_NAME 
    FROM INFORMATION_SCHEMA.TABLES
    WHERE TABLE_NAME LIKE '%solicitacao_devolucao_${mesAno}%'`

    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result);
            console.log(result.length);
            res.send({ table_name: result, size: result.length });
        }
    })

}

exports.verificaTableServicosExtras = (req, res) => {

    let data = new Date();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    let mesAno = mes + "_" + ano;

    const sqlSelect = `SELECT TABLE_NAME 
    FROM INFORMATION_SCHEMA.TABLES
    WHERE TABLE_NAME LIKE '%controle_servicos_extras_${mesAno}%'`

    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result);
            console.log(result.length);
            res.send({ table_name: result, size: result.length });
        }
    })

}

exports.verificaTableServicosExtrasProx = (req, res) => {

    let data = new Date();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    let mesAno = (mes + 1) + "_" + ano;

    const sqlSelect = `SELECT TABLE_NAME 
    FROM INFORMATION_SCHEMA.TABLES
    WHERE TABLE_NAME LIKE '%controle_servicos_extras_${mesAno}%'`

    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result);
            console.log(result.length);
            res.send({ table_name: result, size: result.length });
        }
    })

}

exports.verificaStatusFiltro = (req, res) => {

    const { filtro } = req.params;

    const sqlSelect = `SELECT fechamento FROM filtro_mes_ano_servicos_extras WHERE filtro = ?`

    db.query(sqlSelect, filtro, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result);
            console.log(result.length);
            res.send({ status: result });
        }
    })

}