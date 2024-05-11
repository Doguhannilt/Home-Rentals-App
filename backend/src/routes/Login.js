const express = require('express');
const { check, validationResult } = require('express-validator');
const UserModel = require('../mongodb/models/user');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post("/", [ 
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength(
        {
            min: 6
        })], async (req, res) => { 
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) { return res.status(400).json({ message: errors.array() }) }
    
        const { email, password } = req.body
        
        const user = await UserModel.findOne({ email })
        if (!user) { return res.status(400).json({ message: "User doesn't exists" }) }
        
        const isMatch = await bcrypt.compare(password, user.password || '')
        if (!isMatch) { return res.status(400).json({ message: 'Invalid Credentials' }) }
        
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" })
        res.cookie("auth_token", token, { httpOnly: true, maxAge: 86400000 })
        res.status(200).json({ userId: user._id, email: user.email, password: user.password })

    } catch (err) {
        console.log(err)
    }

        })

module.exports = router