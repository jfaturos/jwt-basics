const login = async (req, res) => {
    const {
        username,
        password
    } = req.body;

    // TODO: Validations
    // mongo
    // Joi
    // check in the controller
    if (!username || !password) {
        throw new Error('Please provide email and password');
    }

    console.log(username, password)
    res.send('Fake Login/Register/Signup');
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
        msg: `Hello, John Doe`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`
    })
}

module.exports = {
    login,
    dashboard
}