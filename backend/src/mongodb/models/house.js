const mongoose = require("mongoose")

// Models
const locationModel = require("./home_models/location")
const priceModel = require("./home_models/price")
const roomModel = require("./home_models/rooms")
const outsideModel = require("./home_models/outside")
const imageModel = require("./home_models/house_images")
const utilsModel = require("./home_models/utils")

const houseSchema = mongoose.Schema({
    location: { type: mongoose.Schema.Types.ObjectId, ref: "Location" },
    price: { type: mongoose.Schema.Types.ObjectId, ref: "Price" },
    rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
    outside: { type: mongoose.Schema.Types.ObjectId, ref: "Outside" },
    house_image: { type: mongoose.Schema.Types.ObjectId, ref: "HouseImage" },
    utils: [{ type: mongoose.Schema.Types.ObjectId, ref: "Utils" }]
})

const houseModel = mongoose.model("House", houseSchema)

module.exports = houseModel