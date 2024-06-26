// requirements
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser")
const logger = require('./src/utils/info_logger')


// routes
const registerRoutes = require("./src/routes/Register") 
const loginRoutes = require("./src/routes/Login")
const cityRoutes = require("./src/routes/City")

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
    origin: "http://localhost:5173",
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST'],
}));


// Register
app.use("/register", registerRoutes)
logger.info("Register route worked")
// Login
app.use("/login", loginRoutes)
logger.info("Login route worked")
// Country
app.use("/city", cityRoutes)
logger.info("City route worked")

// Listen config
app.listen(PORT, () => {
    logger.info("Server is started in 5000")
});