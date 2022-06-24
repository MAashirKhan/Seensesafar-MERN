import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config()

// Async Function for Connection
const connect = async () => {    
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Mongodb")
    } 
    catch (error) {
        throw error;
    }
};

//Use function for double checking the Connection
mongoose.connection.on("disconnected", () =>{
    console.log("MongoDB Disconnected...");
});

mongoose.connection.on("connected", ()=>{
    console.log("MongoDB Connected...");
});


app.listen(8800, ()=>{
    connect()
    console.log("Connected to Backend");
})