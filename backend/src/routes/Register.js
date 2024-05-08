const express = require('express');
const UserModel = require('../mongodb/models/user');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const e_logger = require('../utils/error_logger')

const router = express.Router();

router.post("/", [
    // ! It will check if parameters exists, they're not, the message will shows up
    check("name", "First Name is required").isString(),
    check("lastname", "Last Name is required").isString(),
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({min:6})
], async (req, res) => { 
    
    const errors = validationResult(req)
    if (!errors.isEmpty()) { return res.status(400).json({ message: errors.array() }) }
    
    try {
        const user = await UserModel.findOne({email: req.body.email})
        if (user) { return res.status(400).json({ message: 'User already exists' }) }
        
        const newUser = new UserModel(req.body)
        await newUser.save()

        return res.status(200).json({ message: 'User registered' })
    } catch (err) {
        console.log(err)
    }
})


module.exports = router;