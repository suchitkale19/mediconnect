import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A doctor must have name."],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please provide an email"],
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Provide provide a password"],
      select: false,
    },
    image: { type: String, required: [true, "Please prove an image"] },
    speciality: {
      type: String,
      required: [true, "A doctor must have speciality."],
    },
    degree: {
      type: String,
      required: [true, "A doctor must have degree."],
    },
    experience: {
      type: String,
      required: [true, "A doctor must have experience."],
    },
    about: {
      type: String,
      required: [true, "A doctor must have about."],
    },
    fees: {
      type: Number,
      required: [true, "A doctor must have fees."],
    },
    address: {
      type: Object,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    slotsBooked: {
      type: Object,
      default: {},
    },
  },
  {
    minimize: false,
  },
);

doctorSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 12);
});

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
