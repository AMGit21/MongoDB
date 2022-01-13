const mongoose = require("mongoose");
const dbconnect = require("../dbconnect");
const personModel = require("../models/person");
const showErrors = require("./showErrors");
const person1 = new personModel({
    Fname: 'Hadi',
    Lname: 'Makki',
    gender: "mal",
    Age: 71,
    Married: true,
});
const person2 = new personModel({
    Fname: 'Mhmd',
    Lname: 'Hadi',
    Age: 19,
    Date: new Date(),
    Married: true,
});
console.log(person1.Fname, person1.Lname, person1.Age);
console.log(person2.Fname, person2.Lname, person2.Age);

// 3m nma77e lcollections bas krmel ma ybayyin fi ktir data 3enna
// 3melneha b async w await kirmel baddo yrou7 3l database layma77e fa fi natra 
const drop_collection = async() => {
    await personModel.collection.drop();
}

drop_collection().then( // save the new person documents into the collection
    () => {
        person1.save().then(result => {
            console.log('Person 1 Added!')
            mongoose.connection.close()
        }).catch((error) => {
            showErrors(error) // call function from ./showErrors.js
            mongoose.connection.close()
        })
        person2.save().then(result => {
            console.log('Person 2 Added!')
            mongoose.connection.close()
        }).catch((error) => {
            showErrors(error) // call function from ./showErrors.js
            mongoose.connection.close()
        })
    })