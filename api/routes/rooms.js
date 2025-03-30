import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// Define Room Schema
const roomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    maxPeople: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    roomNumbers: [{
        number: Number,
        unavailableDates: [{ type: Date }]
    }],
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true
    }
}, { timestamps: true });

const Room = mongoose.model("Room", roomSchema);

// Create new room
router.post("/:hotelId", async (req, res) => {
    try {
        const newRoom = await Room.create({
            ...req.body,
            hotelId: req.params.hotelId
        });
        res.status(201).json(newRoom);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all rooms
router.get("/", async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get rooms by hotel
router.get("/hotel/:hotelId", async (req, res) => {
    try {
        const rooms = await Room.find({ hotelId: req.params.hotelId });
        res.status(200).json(rooms);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get single room
router.get("/:id", async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) return res.status(404).json({ message: "Room not found" });
        res.status(200).json(room);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update room
router.put("/:id", async (req, res) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        if (!updatedRoom) return res.status(404).json({ message: "Room not found" });
        res.status(200).json(updatedRoom);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete room
router.delete("/:id", async (req, res) => {
    try {
        const deletedRoom = await Room.findByIdAndDelete(req.params.id);
        if (!deletedRoom) return res.status(404).json({ message: "Room not found" });
        res.status(200).json({ message: "Room has been deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
