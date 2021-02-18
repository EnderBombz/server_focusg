const mysql = require('mysql');
const config = require('../config/database');
module.exports = mysql.createPool(config);