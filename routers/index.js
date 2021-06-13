const express = require("express"); 
const { stationRouter } = require("./station.routers");
const { tripRouter } = require("./trip.routers");
const { userRouter } = require("./user.routers");

const rootRouter = express.Router();

rootRouter.use("/stations", stationRouter); 

rootRouter.use("/users", userRouter); 

rootRouter.use("/trips", tripRouter); 

module.exports = {
    rootRouter
}