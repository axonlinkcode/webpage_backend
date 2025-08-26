import Patient from "../models/PatientModel.js";

export const createPatient = async (req, res) => {
    console.time("form submission");

    try {
        console.time('db write');
        const newPatient = new Patient(req.body);
        const savedPatient = await newPatient.save();
        console.timeEnd('db write');

        res.status(201).json(savedPatient);

    } catch (error) {
        res.status(500).json({ message: error.message });
    } finally {
        console.timeEnd('form submission');
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