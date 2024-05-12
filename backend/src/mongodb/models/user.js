const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");

// models
const saveModel = require("./save");
const favoritesModel = require("./favorites");
const criteriaModel = require("./criteria");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    telephone: { type: Number },
    // save, favorites, criteria
    save: [{ type: mongoose.Schema.Types.ObjectId, ref: "Save" }],
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Favorites" }],
    criteria: [{ type: mongoose.Schema.Types.ObjectId, ref: "Criteria" }]
})

// pass -> John
userSchema.pre("save", async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password,8)
    }
    next()
})
// hash pass-> J3284Omv@fkjdkgN


const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel