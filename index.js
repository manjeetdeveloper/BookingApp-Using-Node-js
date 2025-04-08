import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoute from "./api/routes/auth.js"
import userModel from "./api/routes/users.js"
import hotelRoute from "./api/routes/hotels.js"
import roomRoute from "./api/routes/rooms.js"


const app = express()

// Middleware
app.use(express.urlencoded({ extended: true }))


app.use(express.json()) // ye purata data jo post kr rhe hai usko json format me convert karega

// Routes/ middleware
app.use("/api/users", userModel)
app.use("/api/auth", userModel)
app.use("/api/hotels", hotelRoute)
app.use("/api/rooms", roomRoute)

// Here write another middelware bcs "HOw to handle Errors In Express Server(res.status(500).json(err);)
 app.use((err,req, res,next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Somting went wrong !"
  return res.status(500).json({
    success:false,
    status:errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
 });


// Test route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Backend server is running!',
    databaseStatus: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

app.post('/books', (req, res) => {
  userModel.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ error: err.message }))
})

// MongoDB Connection
mongoose.connect('mongodb+srv://manjeet:manjeet@cluster0.uurzfnm.mongodb.net/booking')
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => console.log(" Database Error:", err))



const PORT = process.env.PORT || 8500
app.listen(PORT, () => {
  console.log(`Backend server is running at http://localhost:${PORT}`)
  console.log('You can test the connection by visiting:')
  console.log(`  http://localhost:${PORT}`)
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`❌ Port ${PORT} is already in use. Please try a different port.`);
  } else {
    console.log('❌ Server error:', err);
  }
});