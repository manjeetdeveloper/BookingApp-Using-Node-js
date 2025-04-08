import User from "../models/User.js";
import bcrypt, { hash } from "bcryptjs";
import { createError } from "../utils/error.js";
// import { JsonWebTokenError } from "jsonwebtoken";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    //integrate HAsh PAsswords ------------------------------
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    // Store hash in your password DB

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("User has been Created.");
  } catch (err) {
    next(err);
  }
};

// ----------------------------------------------------------------

//   Craete LOGIN Function

// ----------------------------------------------------------------
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found !"));

    // password simple se hash me comapir krega
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong Password  or username!"));

    // use jsonwebtoken to hide admin information and user ka v and omly admin /create/edit/deleteUpdate - Hotels, Rooms and all ...

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT 
    );

    //  then this see the all Deatails :- Like Admin -true, passwprd-true aise he (otherDetails)
    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(otherDetails);
  } catch (err) {
    next(err);
  }
};
