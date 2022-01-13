const mongoose = require("mongoose");
const dbconnect = require("../dbconnect");
const personModel = require("../models/person");
// 3melneha b async w await kirmel baddo yrou7 3l database layfattesh wyerja3 yjib lnatije fa fi natra 
// find all the person with a last name "Hadi" and with an age greater than or equal "18"
const getSpecificPerson = async() => {
    await personModel.find({ Lname: "Hadi", Age: { $gte: 22 } }).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
    })
}
getSpecificPerson()
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