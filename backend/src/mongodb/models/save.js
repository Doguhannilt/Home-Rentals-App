const mongoose = require("mongoose")

const saveSchema = mongoose.Schema({
    saved_id: { type: String }
})

const saveModel = mongoose.model("Save", saveSchema)

module.exports = saveModel