const mongoose = require("mongoose");
const personModel = require("../models/person");
const dbconnect = require("../dbconnect");
const showErrors = require("./showErrors");
async function awaitUpdate() {
    try {
        const filter = {
            Fname: "Mhmd",
            Lname: 'Hadi',
            Age: 19
        };
        const update = { Age: 24 }
        const doc = await personModel.findOneAndUpdate(filter, update, { rawResult: true }).then((res) => {
            console.log("There exist a documents that match the filter conditions: ", res.lastErrorObject.updatedExisting, "\nNumber of founded documents: ", res.lastErrorObject.n);
            res.lastErrorObject.updatedExisting ? console.log("successfully updated") : console.log("Unsuccessfully updated");
            mongoose.connection.close()
        })
    } catch (err) {
        mongoose.connection.close()
        showErrors(err);
    }
}
awaitUpdate()