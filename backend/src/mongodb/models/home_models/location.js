const mongoose = require("mongoose")
const cityModel = require("../city")

const locationSchema = mongoose.Schema({
    country: { type: String },
    city: [cityModel],
    street: { type: String },
    neighbourhood: { type: String },
    apartment_number: { type: Number },
})

const locationModel = mongoose.model("Location", locationSchema)

module.exports = locationModel