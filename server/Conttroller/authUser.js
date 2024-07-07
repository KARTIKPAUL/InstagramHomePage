const express = require('express');
const User = require('../Models/userModel.js')
const emailValidator = require('email-validator');


//SignUp
const signup = async(req,res,next) =>{
    const {name,email,password} = req.body;

    //validation
    if(!name || !email || !password){
        return res.status(400).json({
            succcess: false,
            message: 'Every Field is required' 
        })
    }

    const validEmail = emailValidator.validate(email);
    if(!validEmail){
        return res.status(400).json({
            succcess: false,
            message: 'Email is Not Valid' 
        })
    }

    try {
        const userInfo = User(req.body);
        const result = await userInfo.save();
        return res.status(200).json({
            succcess: true,
            data: `Accout Create Succcesfully ${result}` 
        })
    } catch (error) {
        if(error.code === 11000){
            return res.status(400).json({
                succcess: false,
                message: 'Account Already Registered' 
            })
        }
        return res.status(400).json({
            succcess: false,
            message: `Error ! When Creating Account ${error.message}` 
        })
    }

}

//SignIn

const signin = async (req,res) => {

}


module.exports = {
    signup,
    signin
}