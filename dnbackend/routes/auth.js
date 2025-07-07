const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/Users');
const {body, validationResult} = require('express-validator');
require('dotenv').config();


//to create user /api/auth/createUser
router.post('/createUser', [
    body("name", "Please enter a valid name.").isLength({min : 3}),
    body("email", "Please enter a valid email.").isEmail(),
    body("password", "The password should have at least 8 characters").isLength({min : 8})
], async (req,res) => {
    
    const errs = validationResult(req);
    if(!errs.isEmpty())
    {
        return res.status(400).json({result : "failure",message : `${errs.array().map((x) => {
            return `${x.msg}`;
        }).join('\n')}`});
    }

    try{
        let user = await User.findOne({email : req.body.email});
        if(user)
        {
            return res.status(400).json({result : "failure", message : " The user already exists. "});
        }
        else
        {
            const salt = await bcrypt.genSalt(10);
            const secsalt = await bcrypt.hash(req.body.password, salt);
            let user = await User.create({
                name : req.body.name,
                email : req.body.email,
                password : secsalt
            });

            const data = {
                user : {
                    email : req.body.email
                }
            };

            const tok = jwt.sign(data,process.env.JWT_SECRET);
            return res.json({result : "Success", authToken : tok});
        }
    }catch(err){
        //console.log(err);
        return res.status(500).json({result: "failure",message : "Internal server error."});
    }

});

//to login /api/auth/login
router.post('/login',[
    body("email", "Please enter a valid email ID.").isEmail(),
    body("password", "Password cannot be blank.").notEmpty()
], async (req,res) => {
    const errs = validationResult(req);
    //console.log(errs);
    if(!errs.isEmpty())
    {
        return res.status(400).json({result : "failure",message : `${errs.array().map((x) => {
            return `${x.msg}`;
        }).join('\n')}`});
    }

    try{
        const user = await User.findOne({email : req.body.email});
        if(!user)
        {
            return res.status(400).json({result : "failure", message : "Please enter valid credentials."});
        }
        const pass = await bcrypt.compare(req.body.password, user.password);
        if(!pass)
        {
            return res.status(400).json({result : "failure", message : "Please enter valid credentials."});
        }

        let data = {
            user : {
                email : user.email
            }
        };
        let auth = jwt.sign(data, process.env.JWT_SECRET);
        return res.json({result : "Success", authToken : auth});
    }catch(err){
        console.log(err);
        return res.status(500).json({result:"failure",message : "Internal server error."});
    }
});

module.exports = router;