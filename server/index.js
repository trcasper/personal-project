require('dotenv').config()
const express = require('express');
const massive = require('massive');
const authCtrl= require('./authController');
const session = require('express-session');
const app = express()

app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env


massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log('db connected')

})

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))

// ENDPOINTS
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/auth/logout', authCtrl.logout)


app.listen(SERVER_PORT, () => {
    console.log(`Server running on ${SERVER_PORT}`)
})

