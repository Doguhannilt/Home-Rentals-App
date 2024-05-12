const mongoose = require("mongoose")

const imageSchema = mongoose.Schema({
    image: { type: String },
})

const imageModel = mongoose.model("HouseImage", imageSchema)

module.exports = imageModel