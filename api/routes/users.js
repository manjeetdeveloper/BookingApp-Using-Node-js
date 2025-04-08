import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken , verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// // check krne ke liye another request
// router.get("/checkauthentication", verifyToken, (req, res,next) => {
//     res.send("hello user, you are logged in");
//   });
  
// router.get("/checkuser/:id", verifyUser, (req, res,next) => {
//     res.send("hello user, you are logged in and you can delete you account");
//   });

// //    Ab IsDmin check krnge ki id se authrize hai ya nahi 

// router.get("/checkadmin/:id", verifyAdmin, (req, res,next) => {
//     res.send("hello Admin, you are logged in and you can delete all account");
//   });

// Update
router.put("/:id", verifyUser, updateUser);

// Delete
router.delete("/:id", verifyUser , deleteUser);

// Get one user
router.get("/:id", verifyUser, getUser);

// Get all users
router.get("/", verifyAdmin, getUsers);

export default router;
