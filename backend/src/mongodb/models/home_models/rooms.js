const mongoose = require("mongoose")


const roomSchema = mongoose.Schema({
    total_room_number: { type: Number },
    bath_room: { type: Number },
    kitchen_room: { type: Number },
    total_floor_number: { type: Number },
    balcony_number: { type: Number },
    saloon_number: { type: Number },
})

const roomModel = mongoose.model('Rooms', roomSchema)

module.exports = roomModel