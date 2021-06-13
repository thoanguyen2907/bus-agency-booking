const express = require("express"); 
const { createTrip } = require("../controllers/trip.controllers");


const tripRouter = express.Router(); 

tripRouter.post("/", createTrip); 

module.exports = {
    tripRouter
}