const express = require('express')
const app = express()
const morgan = require('morgan')
const Router = require('./config/app')
const connection = require('./database/connection')
const session = require('express-session')
const cors = require('cors')

app.use(express.urlencoded({ extended: false}))
app.use(express.json())

app.use(morgan('tiny'))
app.use(cors())

app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true,
        maxAge: 3000
    }
}));

Router(app)

connection
    .authenticate()
    .then(() => console.log('Connected with database'))
    .catch(err => console.log(err))

app.listen(8081, () => console.log('Server is running on port 8081'))