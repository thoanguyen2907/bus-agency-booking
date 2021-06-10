const express = require("express");
const path = require("path");
const { sequelize } = require("./models");
const { rootRouter } = require("./routers");

const app = express();



//cài ứng dụng sử dụng kiểu json 
app.use(express.json());

//cài static files 

const publicPathDirectory = path.join(__dirname, "./public");
app.use("/public",express.static(publicPathDirectory)); 

app.use("/api/v1", rootRouter); 

//listen sự kiện kết nối

app.listen(3000, async () => {

    console.log("App listening on http://localhost:3000");
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  });