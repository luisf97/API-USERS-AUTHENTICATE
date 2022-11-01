const routes = require('express').Router()
const Users = require('../controllers/UsersController')

const verifyJWT = require('../middleware/verifyJWT')
const isAdmin = require('../middleware/isAdmin')

routes.options('/options', Users().options)
routes.get('/', isAdmin, verifyJWT, Users().getAllUsers)
routes.get('/:id', Users().getUserById)
routes.post('/', Users().save)
routes.put('/:id', Users().update)
routes.delete('/:id', Users().delete)

module.exports = routes;