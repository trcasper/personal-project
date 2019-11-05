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
        console.log("server", username, password)
        const db = req.app.get('db')

        let foundUser = await db.get_user(username);
        foundUser = foundUser[0]
        if(!foundUser) {
           res.status(401).send("Username not found")
        }
        console.log(foundUser)
        const isAuthenticated = bcrypt.compareSync(password, foundUser.password);
        
        if(isAuthenticated) {
            req.session.user = foundUser;
            res.status(200).send(req.session.user);
        } else {
            res.status(401).send('Incorrect Password')
        }
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200);

    },

    // getUser: (req, res) => {
    //     if(req.session.user) {
    //         res.status(200).send(req.session.user)
    //         //finds if there are any available sessions
    //     }
    //     res.sendStatus(200)
    //     //still sends a status that it worked even if there weren't any available sessions
    // },

    // guest_register: async (req, res) => {
    //     if(!req.session.user) {
    //         let guestUser = await db.guest_register(guest)
    //         guestUser[0];
    //         res.status(200).send("Guest")

        
    //     }
    // }
    
}
