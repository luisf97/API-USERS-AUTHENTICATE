const routes = require('express').Router()
const Login = require('../controllers/LoginController')

routes.post('/login', Login().login)

module.exports = routes;