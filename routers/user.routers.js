const  express = require("express");
const { getAllTrip } = require("../controllers/trip.controllers");
const { register, login, uploadAvatar } = require("../controllers/user.controllers");
const { authenticate } = require("../middlewares/auth/authenticate");
const { uploadImage } = require("../middlewares/upload/upload-image");

const userRouter = express.Router()

userRouter.post("/register", register); 
userRouter.post("/login", login); 

userRouter.post("/upload-avatar", authenticate, uploadImage("avatar"), uploadAvatar);

userRouter.get("all-trip", getAllTrip); 

module.exports = {
  userRouter
}