const { Model, DataTypes } = require('sequelize')

class Contas extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
        })
    }
}

module.exports = Contas;