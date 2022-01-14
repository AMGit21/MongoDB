// models/Person.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
    Fname: {
        type: String,
        required: true,
        unique: true,
    },
    Lname: {
        type: String,
        required: true,
        match: /[a-z]/,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
    },
    Age: {
        type: Number,
        min: [18, "Min age is 18 years"],
        max: 65,
    },
    Date: {
        type: Date,
        default: Date.now,
    },
    Married: {
        type: Boolean,
    },
}, { timestamps: true });

// Create a model with the specific schema
const personModel = mongoose.model("person", personSchema);
// export the created model
module.exports = personModel;