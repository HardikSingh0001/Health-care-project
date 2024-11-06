const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please add your first name"],
    },
    lastName: {
        type: String,
        required: [true, "Please add your last name"],
    },
    email: {
        type: String,
        required: [true, "Please add your email"],
        unique: true,  // Makes sure email is unique in the database
    },
    age: {
        type: Number,
        required: [true, "Please add your age"],
    },
    bloodGroup: {
        type: String,
        required: [true, "Please add your blood group"],
    },
    gender: {
        type: String,
        required: [true, "Please add your gender"],
    },
    phoneNumber: {
        type: String,
        required: [true, "Please add your phone number"],
    },
    password: {
        type: String,
        required: [true, "Please add your password"],
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("User", userSchema);
