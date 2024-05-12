const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
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