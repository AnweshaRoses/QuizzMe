const express = require("express");
const cors=require("cors")
const app=express()
const mongoose=require("mongoose")
const dotenv=require("dotenv")

const quesRoutes=require("./routes/route")
dotenv.config()

  app.use(cors());
  app.use("/api",quesRoutes);

mongoose.connect(process.env.MONGO_URL ,{dbName: "Quiz"}
    ).then(()=>console.log("DBconnection Successful")
    )
    .catch((err)=>{
        console.log(err);
    })
    const s3 = mongoose.connection.collection("message");

    app.listen(4000,()=>{
        console.log("Backend server is running");
    })
    
