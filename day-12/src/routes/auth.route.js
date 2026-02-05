const express = require('express');
const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');


const authRouter = express.Router();
authRouter.post('/register' , async (req, res) => {


const {name, email, password} = req.body;    

const isuserexist = await UserModel.findOne({email});
if (isuserexist) {
    return res.status(409).json({message: 'User already exists'});
}


const user = await UserModel.create({name, email, password})

const token= jwt.sign(
    {
        id: user._id,
        email: user.email
    }, process.env.JWT_SECRET)

   res.cookie("jwt", token, {})
res.status(201).json({message: 'User registered successfully', user, token});
})


module.exports = authRouter;