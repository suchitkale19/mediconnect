import AppError from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";
import { promisify } from "node:util";
import jwt from "jsonwebtoken";

export const protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError(
        "You haven't logged in yet! Please Log in to get access ",
        403,
      ),
    );
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  if (decoded.id !== process.env.ADMIN_EMAIL) {
    return next(
      new AppError("You have no permissions to perform this action.", 403),
    );
  }
  next();
});
