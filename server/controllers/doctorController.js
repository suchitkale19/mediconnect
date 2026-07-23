import Doctor from "../model/doctorModel.js";

export const getAllDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.status(200).json({
    status: "success",
    data: doctors,
  });
};

export const createDoctor = async (req, res) => {
  const newDoctor = await Doctor.create(req.body);

  res.status(201).json({
    status: "success",
    data: newDoctor,
  });
};

export const getDoctor = async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: doctor,
  });
};

export const updateDoctor = async (req, res) => {
  const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(202).json({
    status: "success",
    data: doctor,
  });
};

export const deleteDoctor = async (req, res) => {
  const doctor = await Doctor.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: doctor,
  });
};
