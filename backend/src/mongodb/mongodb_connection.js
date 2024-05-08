const mongoose = require('mongoose')
require('dotenv').config()

const e_logger = require("../utils/error_logger")
const i_logger = require("../utils/info_logger")

class MongoDBConnection{
    async connection () {
        try {
            await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
            i_logger.info("Connected to the DB");
        } catch (error) {
           e_logger(error)
        }
}}


// Database Connection
const MONGODBCONNECTION = new MongoDBConnection();
MONGODBCONNECTION.connection();