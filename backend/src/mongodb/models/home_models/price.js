const mongoose = require("mongoose")


const priceSchema = mongoose.Schema({
    house_price: { type: Number, required: true },
    deposit: { type: Number, required: true },
    daily_rental: { type: Number },
    weekly_rental: { type: Number }
})

const priceModel = mongoose.model("Price", priceSchema)

module.exports = priceModel