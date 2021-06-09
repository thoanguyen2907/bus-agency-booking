const  express = require("express");
const { register, login } = require("../controllers/user.controllers");

const multer  = require('multer')
const upload = multer({ dest: 'uploads/avatar' })

const userRouter = express.Router()

userRouter.post("/register", register); 
userRouter.post("/login", login); 

userRouter.post("/upload-avatar", upload.single('avatar'), (req, res) => {
  res.send("Upload file Run Already !!"); 
})

module.exports = {
  userRouter
}