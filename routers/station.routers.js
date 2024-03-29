const  express = require("express");
const { createStation, getAllStation, getDetailStation, updateStation, deleteStation } = require("../controllers/station.controllers");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");
const { checkExist } = require("../middlewares/validations/checkExist");
const {Station} = require("../models");

const stationRouter = express.Router()

stationRouter.post("/", authenticate,authorize(["Admin"]), createStation); 

stationRouter.get("/", getAllStation); 

stationRouter.get("/:id", getDetailStation); 

stationRouter.put("/:id",authenticate, 
checkExist(Station),
updateStation
  ); 

stationRouter.delete("/:id", authenticate, 
checkExist(Station),
deleteStation)

module.exports = {
    stationRouter
}