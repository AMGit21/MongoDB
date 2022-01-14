const mongoose = require("mongoose");
const personModel = require("../models/person");
const dbconnect = require("../dbconnect");
const showErrors = require("./showErrors");
async function awaitUpdate(model, filter, update) {
    try {
        const res = await model.updateMany(filter, update);
        console.log(res.acknowledged, res.matchedCount, res.modifiedCount)
            // const doc = await personModel.findOneAndUpdate(filter, update, { rawResult: true }).then((res) => {
            // console.log("There exist a documents that match the filter conditions: ", res.lastErrorObject.updatedExisting, "\nNumber of founded documents: ", res.lastErrorObject.n);
            // res.lastErrorObject.updatedExisting ? console.log("successfully updated") : console.log("Unsuccessfully updated");
        console.log("Number of founded documents: ", res.matchedCount, "\nNumber of updated documents: ", res.modifiedCount);
        res.modifiedCount ? console.log("successfully updated") : console.log("Unsuccessfully updated");
        mongoose.connection.close()
    } catch (err) {
        mongoose.connection.close()
        showErrors(err);
    }
}
const filter = {
    // Fname: "Mhmd",
    Lname: 'Hadi',
    Age: 19
};
const update = { Age: 19 }
awaitUpdate(personModel, filter, update)