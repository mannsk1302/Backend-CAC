require('dotenv').config({ path: './.env' });
const connectDB = require('./db/index.js');

connectDB();
































/*
const express = require('express');

const app = express();

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("Error", (error) => {
            console.log("Error: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log("Server is running on port: ", process.env.PORT);
        })


    } catch (error) {
        console.error("ERROR: ", error);
        throw error;
    }
})()


 */