require('dotenv').config()
const express = require('express');
const massive = require('massive');
const authCtrl= require('./authController');
const prodCtrl= require('./prodController');
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

// login endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/auth/logout', authCtrl.logout)

// guest endpoints
// app.get('/auth/getUser', authCtrl.getUser)
// app.post('/auth/guest_register', authCtrl.guest_register)

// product endpoints
app.get('/api/getProducts', prodCtrl.getProducts)
app.post('/api/addProduct', prodCtrl.addProduct)
app.put('/api/editProduct/:product_id', prodCtrl.editProduct)


app.listen(SERVER_PORT, () => {
    console.log(`Server running on ${SERVER_PORT}`)
})

