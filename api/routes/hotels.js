import express from "express";
import Hotel from "../models/hotel.model.js";

//Create a router f9r the auth routes
const router = express.Router();

//Create new hotel
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
});

//Update the hotel details
router.put("/:id", async (req, res) => {
  try {
    //Update the hotel
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    // it returns the error to the client
    res.status(500).json(error);
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  try {
    //Delete the hotel
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted from Record");
  } catch (error) {
    // it returns the error to the client
    res.status(500).json(error);
  }
});

//Get
router.get("/:id", async (req, res) => {
  try {
    //Update the hotel
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    // it returns the error to the client
    res.status(500).json(error);
  }
});

//Get All Hotels
router.get("/", async (req, res, next) => {
  console.log("Hi I am Hotel Route");
  try {
    //Update the hotel
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    // it returns the error to the server to client
    res.status(500).json(error);
  }
});

export default router;