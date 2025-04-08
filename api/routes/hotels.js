import express from "express";
import mongoose from "mongoose";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getHotel, getHotels, updatedHotel } from "../controllers/hotel.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);

//Update
router.put("/:id",updatedHotel );

//Delete
router.delete("/:id", deleteHotel);

  //GET
router.get("/:id", getHotel);
  
    //GET ALl
router.get("/", getHotels);
export default router;
