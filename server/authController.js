// const express = require('express');
const bcrypt = require('bcryptjs');

module.exports = {
    register: async(req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');
        let foundUser = await db.check_username(username);
        foundUser = foundUser[0]
        if(foundUser) {
            res.status(409).send('Username already exists');
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.register([username, hash]);
        newUser = newUser[0];
        res.status(200).send('Registered')
        
    },

    login: async (req, res) => {
        const {username, password} = req.body;
        console.log(req.body)
        const foundUser = await req.app.get('db').get_user([username]);
        const user = foundUser[0]
        console.log(user)
        if(!user) {
            return res.status(401).send("Username not found, Please register as a new user")
        }
        const isAuthenticated = bcrypt.compareSync(password, user.password);
        
        if(!isAuthenticated) {
            return res.status(403).send("Incorrect Password");
        }
        return res.status(200).send(user)
        
        
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200);

    }
    
}
