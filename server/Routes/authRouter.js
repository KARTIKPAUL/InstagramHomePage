const express = require('express');
const authRoter = express.Router();
const { signup , signin } = require('../Conttroller/authUser.js')

authRoter.post('/signup' , signup)
authRoter.post('/signin' , signin)

module.exports = authRoter;