const mongoose = require("mongoose")
const cityModel = require("../city")

const locationSchema = mongoose.Schema({
    country: { type: String },
    city: [{ type: mongoose.Schema.Types.ObjectId, ref: "City", required: true }],
    street: { type: String },
    neighbourhood: { type: String },
    apartment_number: { type: Number },
})

const locationModel = mongoose.model("Location", locationSchema)

module.exports = locationModel