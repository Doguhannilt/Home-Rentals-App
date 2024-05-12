const mongoose = require("mongoose")

// models
const utilsModel = require("./home_models/utils")
const priceModel = require("./home_models/price")
const locationModel = require("./home_models/location")


const criteriaSchema = mongoose.Schema({
    location: { type: mongoose.Schema.Types.ObjectId, ref: "Location" },
    price: { type: mongoose.Schema.Types.ObjectId, ref: "Price" },
    utils: [{ type: mongoose.Schema.Types.ObjectId, ref: "Utils" }]
})

const criteriaModel = mongoose.model("Criteria", criteriaSchema)

module.exports = criteriaModel