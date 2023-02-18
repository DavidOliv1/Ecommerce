import User from "../models/userModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";

class UserController {
  static registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      avatar: { public_id: "this is a sample id", url: "profilepicUrl" },
    });

    res.status(201).json({
      success: true,
      user,
    });
  });
}

export default UserController;
