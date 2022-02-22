const db = require('../database')

exports.motoboy = (req, res) => {

    let data = new Date();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    let mesAno = mes + "_" + ano;

    const sqlFiltro = `INSERT INTO filtro_mes_ano_motoboy(filtro)values('${mesAno}');`


    const sqlCreateTableMotoboy = `CREATE TABLE focusgroupapp.solicitacao_motoboy_${mesAno}(
        id INT NOT NULL AUTO_INCREMENT,
        colaborador VARCHAR(200) NOT NULL,
        periodo VARCHAR(10) NOT NULL,
        departamento VARCHAR(100) NOT NULL,
        empresa VARCHAR(200) NOT NULL,
        assunto TEXT NOT NULL,
        cidade VARCHAR(200) NOT NULL,
        urgente VARCHAR(8) NOT NULL,
        data VARCHAR(50) NOT NULL,
        observacao TEXT NULL,
        status VARCHAR(40) NULL,
        motoboy VARCHAR(200) NULL,
        dataCadastro VARCHAR(100) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL,
        PRIMARY KEY (id))
      ENGINE = InnoDB
      DEFAULT CHARACTER SET = utf8
      COLLATE = utf8_unicode_ci;
      `

    db.query(sqlCreateTableMotoboy, (err) => {
        if (err) {
            console.log(err.code);
        } else {
            db.query(sqlFiltro, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('filtro atualizado')
                }
            })
            console.log(`solicitacao_motoboy_${mesAno} criada com sucesso!`);
        }
    })
}

exports.uber = (req, res) => {

    let data = new Date();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    let mesAno = mes + "_" + ano;

    const sqlCreateTableUber = `
   CREATE TABLE solicitacao_uber_${mesAno}(
    id INT NOT NULL AUTO_INCREMENT,
    dataSolicitacao VARCHAR(50) NOT NULL,
    usuario VARCHAR(200) NOT NULL,
    empresa VARCHAR(300) NOT NULL,
    cidade VARCHAR(200) NOT NULL,
    horaVolta VARCHAR(45) NOT NULL,
    assunto TEXT NULL,
    horaIda VARCHAR(50) NOT NULL,
    placaUberIda VARCHAR(8) NOT NULL,
    valorUberIda DOUBLE NULL,
    placaUberVolta VARCHAR(8) NULL,
    valorUberVolta DOUBLE NULL,
    conclusao VARCHAR(80) NULL,
    PRIMARY KEY (id))
  ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8
  COLLATE = utf8_unicode_ci;
   `

    const sqlFiltro = `INSERT INTO filtro_mes_ano_uber(filtro)values('${mesAno}'); `


    db.query(sqlCreateTableUber, (err) => {
        if (err) {
            console.log(err.code);
        } else {
            if (err) {
                console.log(err);
            } else {
                db.query(sqlFiltro, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('filtro atualizado')
                    }
                })
                console.log(`solicitacao_uber_${mesAno} criada com sucesso!`);
            }

        }
    })
}

exports.devolucao = (req, res) => {

    console.log("criando tabela devolucao...")

    let data = new Date();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    let mesAno = mes + "_" + ano;

    const sqlCreateTableDevolucoes = `
   CREATE TABLE solicitacao_devolucao_${mesAno}(
    id INT NOT NULL AUTO_INCREMENT,
    colaborador VARCHAR(200) NOT NULL,
    periodo VARCHAR(20) NOT NULL,
    empresa VARCHAR(200) NOT NULL,
    cidade VARCHAR(80) NOT NULL,
    tipo VARCHAR(80) NOT NULL,
    quantidade INT NOT NULL,
    observacao TEXT NULL,
    data VARCHAR(20) NULL,
    motoboy VARCHAR(100) NOT NULL,
    status VARCHAR(50) NULL,
    data_cadastro VARCHAR(20) NULL,
    PRIMARY KEY (id));
   `


    const sqlFiltro = `INSERT INTO filtro_mes_ano_devolucao(filtro)values('${mesAno}'); `

    db.query(sqlCreateTableDevolucoes, (err) => {
        if (err) {
            console.log(err.code);
        } else {
            if (err) {
                console.log(err);
            } else {
                db.query(sqlFiltro, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('filtro atualizado')
                    }
                })
                console.log(`solicitacao_devolucao_${mesAno} criada com sucesso!`);
            }

        }
    })


}

exports.servicos = (req, res) => {

    let data = new Date();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    let mesAno = mes + "_" + ano;

    const sqlCreateTableServicosExtras = `
    CREATE TABLE focusgroupapp.controle_servicos_extras_${mesAno}(
    id INT NOT NULL AUTO_INCREMENT,
    data VARCHAR(50) NOT NULL,
    mesRef VARCHAR(50) NOT NULL,
    cliente VARCHAR(300) NOT NULL,
    servico_realizado VARCHAR(300) NOT NULL,
    quantidade INT NOT NULL,
    dataCadastro VARCHAR(45) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    status VARCHAR(50) NULL,
    departamento VARCHAR(100) NOT NULL,
    financeiro VARCHAR(50) NULL,
    valorUnit DOUBLE NOT NULL,
    valorTotal DOUBLE NOT NULL, observacao TEXT NULL,
    PRIMARY KEY (id)
    )
    ENGINE = InnoDB
    DEFAULT 
    CHARACTER SET = utf8
    COLLATE = utf8_unicode_ci;`

    const sqlFiltro = `INSERT INTO filtro_mes_ano_servicos_extras(filtro)values('${mesAno}'); `


    db.query(sqlCreateTableServicosExtras, (err) => {
        if (err) {
            console.log(err.code);
        } else {
            if (err) {
                console.log(err);
            } else {
                db.query(sqlFiltro, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('filtro atualizado')
                    }
                })
                console.log(`controle_servicos_extras_${mesAno} criada com sucesso!`);
            }

        }
    })

}

exports.servicosProx = (req, res) => {

    let data = new Date();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    let mesAno;


    console.log(`${mes} é maior que 12?`)
    if (mes == 12) {
        console.log("sim, é maior")
        console.log("então ano vai ser somado 1")
        ano = ano + 1;
        let janeiro = "1"
        mesAno = janeiro + "_" + ano;
        console.log(mesAno)
    } else {
        mesAno = mes + 1 + "_" + ano;
        console.log(mesAno)
    }


    const sqlCreateTableServicosExtras = `
    CREATE TABLE focusgroupapp.controle_servicos_extras_${mesAno}(
    id INT NOT NULL AUTO_INCREMENT,
    data VARCHAR(50) NOT NULL,
    mesRef VARCHAR(50) NOT NULL,
    cliente VARCHAR(300) NOT NULL,
    servico_realizado VARCHAR(300) NOT NULL,
    quantidade INT NOT NULL,
    dataCadastro VARCHAR(45) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    status VARCHAR(50) NULL,
    departamento VARCHAR(100) NOT NULL,
    financeiro VARCHAR(50) NULL,
    valorUnit DOUBLE NOT NULL,
    valorTotal DOUBLE NOT NULL, observacao TEXT NULL,
    PRIMARY KEY (id)
    )
    ENGINE = InnoDB
    DEFAULT 
    CHARACTER SET = utf8
    COLLATE = utf8_unicode_ci;`

    const sqlFiltro = `INSERT INTO filtro_mes_ano_servicos_extras(filtro,fechamento)values('${mesAno}','aberto'); `


    db.query(sqlCreateTableServicosExtras, (err) => {
        if (err) {
            console.log(err.code);
        } else {
            if (err) {
                console.log(err);
            } else {
                db.query(sqlFiltro, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('filtro atualizado')
                    }
                })
                console.log(`controle_servicos_extras_${mesAno} criada com sucesso!`);
            }

        }
    })

}