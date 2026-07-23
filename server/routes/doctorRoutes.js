import express from "express";
import {
  createDoctor,
  deleteDoctor,
  getAllDoctors,
  getDoctor,
  updateDoctor,
} from "../controllers/doctorController.js";

const doctorRouter = express.Router();

doctorRouter.route("/").get(getAllDoctors).post(createDoctor);

doctorRouter
  .route("/:id")
  .get(getDoctor)
  .patch(updateDoctor)
  .delete(deleteDoctor);

export default doctorRouter;
