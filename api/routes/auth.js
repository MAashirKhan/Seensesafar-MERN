import express from "express";

//Create a router f9r the auth routes 
const router = express.Router();

//Get the api routes
router.get("/", (req, res) => {
    res.send("Hello, This is Auth Endpoint");
});
router.get("/register", (req, res) => {
    res.send("Hello, This is Register Endpoint");   
});

export default router;