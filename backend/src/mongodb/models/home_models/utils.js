const mongoose = require("mongoose")

const utilsSchema = mongoose.Schema({
    house_owner: { type: String, required: true },
    lift_number: { type: Number },
    heating_type: { type: String },
    dues: { type: Number, required: true },
    network_status: { type: Number, required: true },
    network_type: { type: String, required: true },
    furnished: { type: Boolean, required: true },
    residence: { type: Boolean },
    house_year: { type: Number, required: true },
    earthquake_resistance: { type: Number, required: true },
})

const utilsModel = mongoose.model("Utils", utilsSchema)

module.exports = utilsModel