const mongoose = require("mongoose");

require("dotenv").config(); // configuration of env file is loaded into process

// function is created to stablish connection between node js application and database
// and the function is wrapped in the function and it is exported

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then( () => {
        console.log("Database connection Successfull");
    })
    .catch((error) => {
        console.log("Received an error");
        console.error(err);
        process.exit(1);
    })
};

module.exports = dbConnect;