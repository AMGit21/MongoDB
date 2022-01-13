const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/my_first_db"
const connectdb = async(dbURL) => {
    try { // mongoose.connect(uri, options).then(
        await mongoose.connect(dbURL).then(
            () => console.log("connected successfully ...."),
            err => console.log('connection error', error)
        );
    } catch (error) {
        console.log(error)
    }
}
connectdb(url)