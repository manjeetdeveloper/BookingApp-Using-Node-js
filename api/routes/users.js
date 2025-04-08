import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";
const router = express.Router();

// check krne ke liye another request
router.get("/checkauthentication", verifyToken, (req, res,next) => {
    res.send("hello user, you are logged in");
  });

// Update
router.put("/:id", updateUser);

// Delete
router.delete("/:id", deleteUser);

// Get one user
router.get("/:id", getUser);

// Get all users
router.get("/", getUsers);

export default router;
