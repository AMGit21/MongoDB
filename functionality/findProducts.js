const mongoose = require("mongoose");
const dbconnect = require("../dbconnect");
const productModel = require("../models/product");

// 3melneha b async w await kirmel baddo yrou7 3l database layfattesh wyerja3 yjib lnatije fa fi natra 
// find all the products with a price less than 16$
const getSpecificProduct = async() => {
    // { $gte: '2021-01-01', $lte: '2022-01-01' }
    await productModel.find({ Price: { $lt: 16 } }).then(result => {
        result.forEach(product => {
            console.log(product)
        })
        mongoose.connection.close()
    })
}
getSpecificProduct()