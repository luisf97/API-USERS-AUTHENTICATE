const { Users } = require('../models/index')

async function isAdmin(req, res, next) {
    const userLogged = req.session.usuario;
    console.log(req.session)
    
    //const userLogged = { id, name, birthdate, email, isAdmin }

    //const user = await Users.findOne({ where: { email }})

    //console.log(userLogged)

    //if(userLogged) console.log()
    
    
    next()
}

module.exports = isAdmin