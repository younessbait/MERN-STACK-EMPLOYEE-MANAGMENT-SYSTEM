const mongoose = require("mongoose");

const ModelSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const Admin = mongoose.model("Admin", ModelSchema);
module.exports = Admin;
