const mongoose = require("mongoose")

const outsideSchema = mongoose.Schema({
    outside_color: { type: Number },
    garden: { type: Boolean },
    poll: { type: Boolean },
    toys: { type: Boolean },
    shelter: { type: Boolean },
    garage: { type: Boolean }
})


const outsideModel = mongoose.model("Outside", outsideSchema)

module.exports = outsideModel