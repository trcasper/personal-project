require('dotenv').config()
const express = require('express');
const massive = require('massive');
const ctrl= require('./authController');
const app = express()

app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log('db connected')

})


app.listen(SERVER_PORT, () => {
    console.log(`Server running on ${SERVER_PORT}`)
})