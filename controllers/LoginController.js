const { Users } = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = 'luisf'

function LoginController() {
    return {

        async login(req, res) {

            const { email, password } = req.body;

            const usuario = await Users.findOne({ where: { email }})
            

            if(!usuario) {
                console.log('Email não cadastrado!')
                return res.status(401).json({ message: 'Email não cadastrado!'})
            }
            else {
                const passwordIsOk = bcrypt.compareSync(password, usuario.password)
                if(passwordIsOk) {
                    const token = jwt.sign({ id: usuario.id }, SECRET, { expiresIn: 1200 })

                    req.session.usuario = usuario;
                    
                    return res.json({usuario: { name: usuario.name, email: usuario.email }, auth: true, token})
                }
                else {
                    console.log('Os dados inseridos estão incorretos')
                    return res.status(401).json({ message: 'Os dados inseridos estão incorretos'})
                }
            }
            

        }
    }
}

module.exports = LoginController;