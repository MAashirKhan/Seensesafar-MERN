import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotels.js";
import roomRoute from "./routes/rooms.js";
import userRoute from "./routes/users.js";


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

//Use function for checking the Connection
mongoose.connection.on("disconnected", () =>{
    console.log("MongoDB Disconnected...");
});


//middlewares
app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomRoute);
app.use("/api/users", userRoute);

app.listen(8800, ()=>{
    connect()
    console.log("Connected to Backend");
})