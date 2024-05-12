const mongoose = require("mongoose")


const citySchema = mongoose.Schema({
    city: { type: String, required: true },
    city_code: {type: String, required:true}
})


const cityModel = mongoose.model('City', citySchema)

module.exports = cityModel