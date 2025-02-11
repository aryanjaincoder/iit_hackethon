const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL , console.log("connected to mongo db"))
  

  app.use("/api/auth", authRoute);
  // app.use("/api/users", userRoute);

  app.listen("8800", () => {
    console.log("Backend is running.");
  });
