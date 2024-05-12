const mongoose = require("mongoose")

const favoritesSchema = mongoose.Schema({
    favorited_id: { type: String }
})

const favoritesModel = mongoose.model("Favorites", favoritesSchema)

module.exports = favoritesModel