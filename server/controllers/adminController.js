// import Doctor from "../model/doctorModel.js";
import { v2 as cloudinary } from "cloudinary";
import { catchAsync } from "../utils/catchAsync.js";
import Doctor from "../model/doctorModel.js";
import jwt from "jsonwebtoken";
import AppError from "../utils/AppError.js";

export const addDoctor = catchAsync(async (req, res) => {
  const imageUpload = await cloudinary.uploader.upload(req.file.path, {
    resource_type: "image",
  });
  const imageUrl = imageUpload.secure_url;
  const newDoctor = await Doctor.create({
    ...req.body,
    address: JSON.parse(req.body.address),
    image: imageUrl,
  });

  res.status(201).json({
    status: "success",
    message: newDoctor,
  });
});

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const loginAdmin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email && !password) {
    return next(new AppError("Please provide email and password", 403));
  }

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return next(
      new AppError("You have entere'd wrong email or password!", 401),
    );
  }

  const token = signToken(email);
  res.status(200).json({
    status: "success",
    token,
  });
};
