const mongoose = require("mongoose");

const userSchems=a = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true,"Name required"],
        }
    },
    {
    timestamps: true,
    }
)
const mongoose = require("mongoose");