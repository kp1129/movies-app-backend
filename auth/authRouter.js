const express = require('express');
const Users = require('./authModel');
const bcrypt = require('bcryptjs');
const secrets = require('../secrets');
const jwt = require('jsonwebtoken');
const router = express.Router();


// register
router.post("/register", (req, res) => {
    let newUser = req.body;
    // make sure we received both email and password
    // this validation will happen on the frontend,
    // this is just me being paranoid
    if(!newUser.email || !newUser.password){
        res.status(400).json({ message: "Please include both email and password" })
    } else {
        // hash the password
        const rounds = process.env.HASH_ROUNDS || 12;
        const hash = bcrypt.hashSync(newUser.password, rounds);
        newUser.password = hash;

        // add new user to the users table in the db
        Users.add(newUser)
        .then(response => res.status(201).json(response))
        .catch(error => res.status(500).json({ message: "Could not add new user to the database"}))
    }    
})

// login



// logout

module.exports = router;