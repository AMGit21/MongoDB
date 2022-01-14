const mongoose = require("mongoose");
const dbconnect = require("../dbconnect");
const personModel = require("../models/person");
const productModel = require("../models/product");
// 3melneha b async w await kirmel baddo yrou7 3l database layfattesh wyerja3 yjib lnatije fa fi natra 
// find all the person with a last name "Hadi" and with an age greater than or equal "18"
const getSpecificDocuments = async(model, filter) => {
    await model.find(filter).then(result => {
        result.forEach(document => {
            console.log(document)
        })
    })
}
const filterPerson = { Lname: "Hadi", Age: { $lte: 22 } }
const filterProduct = { Price: { $lt: 16 } }
getSpecificDocuments(personModel, filterPerson)
    .then(() => getSpecificDocuments(productModel, filterProduct)
        .then(() => mongoose.connection.close())
    )
module.exports = getSpecificDocuments;
// ---------------------------------------------------------------------------

// This is an example for defining a two same functions but in two ways 
async function my_function1(par) {
    await console.log(par)
}
my_function1("test1")

// ES6
const my_function2 = async(par) => {
    await console.log(par)
}
my_function2("test2")