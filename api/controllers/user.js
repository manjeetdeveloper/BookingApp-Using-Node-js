import User from "../models/User.js";



// Upadte 
export const updateUser = async (req, res, next) =>{
    const newUser = new User(req.body);

    try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
    next(err);
  }
}

// Delete

export const deleteUser = async (req, res, next)=>{
    // const newHotel = new Hotel(req.body);
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
     } catch (err) {
    next(err);
  }
}

// get
export const getUser = async (req, res, next)=>{
    try {
        const user = await User.findById(
          req.params.id
        );
        res.status(200).json(user);
      } catch (err) {
    next(err);
  }
}
// getAll
export const getUsers = async (req, res, next)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
      } catch (err) {
    next(err);
  }
}