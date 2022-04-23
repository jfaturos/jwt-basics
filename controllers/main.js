const {
    request
} = require('express');
const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors');

const login = async (req, res) => {
    const {
        username,
        password
    } = req.body;

    // TODO: Validations
    // mongoose validation
    // Joi (package)
    // check in the controller
    if (!username || !password) {
        throw new BadRequestError('Please provide email and password');
    }

    // just for demo purposes, normally provided by DB!!!
    const id = new Date().getDate();
    // try to keep payload small, better experience for user
    const token = jwt.sign({
        id,
        username
    }, process.env.JWT_SECRET, {
        expiresIn: '1m'
    })

    res.status(200).json({
        msg: 'user created',
        token
    })
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
        msg: `Hello, ${req.user.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`
    })
}

module.exports = {
    login,
    dashboard
}