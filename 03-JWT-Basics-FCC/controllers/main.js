// Check username, password in post(login) request
// if exist, create new JWT and send back to front-end
// Set up authentication where only the request with JWT can access the dashboard
const jwt = require('jsonwebtoken')
const {BadRequestError} = require("../errors/index");

const login = async (req, res) => {
    const { username, password } = req.body
    // validation - mongoose, Joi package, check in the controller

    if (!username || !password) {
        throw new BadRequestError('Please provide email and password')
    }
    // Just for demo, normally provided by DB!!
    const id = new Date().getDate()

    // Try to keep payload small, better experience for user
    // Creating JWT
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
    console.log(username, password);
    res.status(200).send({msg:'user created',token})
}

const dashboard = async (req, res) => {
    console.log(req.user);
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `Hello, ${req.user.username}`, secret: `Here is your authorised data, your lucky no. is ${luckyNumber}` })
}

module.exports = {
    login, dashboard
}