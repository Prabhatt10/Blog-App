const express = require("express");
const app = express();

// load configuration from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware 
app.use(express.json());

// import routes
const blogRoutes = require("../blogApp/routes/blogRoute");

// mount blog app
app.use("/api/v1" , blogRoutes);

// connect database
const dbConnect = require("./config/database");
dbConnect();

// start server
app.listen(PORT , () => {
    console.log(`server successfully started at ${PORT}`);
})

// we need to write default route also
app.get("/" , (req,res) => {
    res.send(`<h1> THIS IS HOMEPAGE </h1>`);
})