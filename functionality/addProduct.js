const mongoose = require("mongoose");
const dbconnect = require("../dbconnect");
const productModel = require("../models/product");
const showErrors = require("./showErrors");
// console.log(process.argv)
// save the new products documents into the collection
const product1 = new productModel({
    ID: 1,
    Name: process.argv[2], // this is an example: process.argv[2] is the third element when I pass in the terminal "node .\app.js [product_name]"
    Description: 'lel8asil ma fi mosta7il',
    ExpireDate: '2023-08-09', // this is an example to access the data from another plac
    Price: 25,
});
const product2 = new productModel({
    ID: 2,
    Name: 'ma7arem',
    Description: 'lel8asil ma fi mosta7il',
    ExpireDate: '2024-12-09',
    Price: 10,
});

console.log(product1.Name, product1.Description, product1.ExpireDate, product1.Price);
console.log(product2.Name, product2.Description, product2.ExpireDate, product2.Price);

// 3m nma77e lcollections bas krmel ma ybayyin fi ktir data 3enna
// 3melneha b async w await kirmel baddo yrou7 3l database layma77e fa fi natra 
// const drop_collection = async() => {
//         await productModel.collection.drop();
//     }
// drop_collection().then(() => {
product1.save().then(result => {
    console.log('Product 1 is added!')
    mongoose.connection.close()
}).catch((error) => {
    showErrors(error) // call function from ./showErrors.js
    mongoose.connection.close()
})
product2.save().then(result => {
        console.log('Product 2 is added!')
        mongoose.connection.close()
    }).catch((error) => {
        showErrors(error) // call function from ./showErrors.js
        mongoose.connection.close()
    })
    // })