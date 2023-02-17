const mongoose = require('mongoose');
require('dotenv').config()
const connect = async() =>{
    return mongoose.connect(process.env.DB_URL)
}
module.exports = connect