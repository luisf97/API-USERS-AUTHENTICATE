const Sequelize = require('sequelize')

// Colocar de acordo com seu mysql

const connection = new Sequelize('usersdb', 'admin', 'Dev@312H', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connection;