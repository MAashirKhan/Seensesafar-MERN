import express from "express";
import Hotel from "../models/Hotel.js";

//Create a router f9r the auth routes 
const router = express.Router();

//Create
router.post("/", async (req, res) => {
    
    const newHotel = new Hotel(req.body);
    try {
        //Save the hotel
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        // it returns the error to the client
        res.status(500).json(error);
    }
})

//Update
router.put("/", async (req, res) => {
    
    const newHotel = new Hotel(req.body);
    try {
        //Save the hotel
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        // it returns the error to the client
        res.status(500).json(error);
    }
})

export default router;