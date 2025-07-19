import Patient from "../models/PatientModel.js";

export const createPatient = async (req, res) => {
    try {
        const newPatient = new Patient(req.body);
        const savedPatient = await newPatient.save();
        res.status(201).json(savedPatient);
    } catch (error) {
            console.error("❌ Error creating patient:", error);
        res.status(500).json({ message: error.message });
    }
};

export const getPatient = async (req, res) => {
    try {
        const patient = await Patient.find();
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}