const jwt = require('jsonwebtoken');

const generateToken = (id,role) =>{
    return jwt.sign({id,role},process.env.TOKEN_SECRET,{
        expiresIn:'7d'
    })
}
module.exports = generateToken