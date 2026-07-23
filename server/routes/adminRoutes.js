import express from "express";
import upload from "../utils/multer.js";
import { addDoctor, loginAdmin } from "../controllers/adminController.js";
import { protect } from "../controllers/authController.js";

const adminRouter = express.Router();

adminRouter.post("/add-doctor", protect, upload.single("image"), addDoctor);
adminRouter.post("/login", loginAdmin);

export default adminRouter;
