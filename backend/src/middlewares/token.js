const jwt = require('jsonwebtoken');

const generateToken = (id) =>{
    return jwt.sign({id},process.env.TOKEN_SECRET,{
        expiresIn:'7d'
    })
}
module.exports = generateToken