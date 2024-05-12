const mongoose = require("mongoose")

// Models
const locationModel = require("./home_models/location")
const priceModel = require("./home_models/price")
const roomModel = require("./home_models/rooms")
const outsideModel = require("./home_models/outside")
const imageModel = require("./home_models/house_images")
const utilsModel = require("./home_models/utils")

const houseSchema = mongoose.Schema({
    location: [locationModel],
    price: [priceModel],
    rooms: [roomModel],
    outside: [outsideModel],
    house_image: [imageModel],
    utils: [utilsModel]
})

const houseModel = mongoose.model("House", houseSchema)

module.exports = houseModel