const jwt = require('jsonwebtoken')
const SECRET = 'luisf'

function verifyJWT(req, res, next){
  const token = req.headers['x-access-token']
  
  jwt.verify(token, SECRET, (err, decoded) => {
    if(err) return res.status(401).json({ message: 'Token inválido', err})

    req.user = decoded.id

    next()

  })

}

module.exports = verifyJWT;
