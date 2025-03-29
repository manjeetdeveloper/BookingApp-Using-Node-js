// import express from "express"
// import dotenv from "dotenv"
// import mongoose from "mongoose"
// dotenv.config();

// const connect = async () => {
//   const mongoURI = process.env.MONGO.replace('@2001@', '%402001@');
//   try {
//     await mongoose.connect(mongoURI);
//     console.log("Connected to MongoDB.");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     throw error;
//   }
// };
// mongoose.connection.on("disconnected", ()=>{
    
// })

// const app = express();

// app.get('/users', (req, res)=>{
//   res.send("Hello First Request!")
// })

// app.listen(8801, () => {
//     connect();
//     console.log("Connected to backend.");
// });
const express = require('express')
const mongoose = require('mongoose')
const app = express();

const userModel = require('./model/user')

app.get('/', (req, res)=>{
  res.send("Server is working well!")
})


app.post('/books', (req, res)=>{
  userModel.create(req.body)
  .then((data)=> res.json(data))
  .catch((err)=> res.json(err))
})

mongoose.connect('mongodb+srv://manjeet:manjeet@cluster0.uurzfnm.mongodb.net/booking')
.then(()=> console.log("Database connected!"))
.catch((err) => console.log("Error", err))

const PORT = process.env.PORT || 5000
app.listen(PORT, (req, res)=>{
  console.log(`Server is listening at http://localhost:${PORT}`)
})