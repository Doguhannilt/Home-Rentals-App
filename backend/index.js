// requirements
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const logger = require('./src/utils/info_logger')
const e_logger = require('./src/utils/error_logger')

//MongoDB
const MongoDBConnection = require('./src/mongodb/mongodb_connection')

// dotenv
dotenv.config();

// Port
const PORT = process.env.PORT || 5000

// Express configuration
const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials:true,
}));





// Listen config
app.listen(PORT, () => {
    logger.info("Server is started in 5000")
});