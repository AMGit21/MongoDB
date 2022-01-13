// models/Product.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    ID: {
        type: Number,
    },
    Name: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
    },
    ExpireDate: {
        type: Date,
    },
    Price: {
        type: Number,
        min: [5, "Minimum price is 5$"],
        max: [100, "Maximum price is 100$"],
    },
}, { timestamps: true });

// Create a model with the specific schema
const productModel = mongoose.model("product", productSchema);
// export the created model
module.exports = productModel;