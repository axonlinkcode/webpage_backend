import Clinician from '../models/ClinicianModel.js';

export const createClinician = async (req, res) => {
    try {
        const newClinician = new Clinician(req.body);
        const savedClinician = await newClinician.save();
        res.status(201).json(savedClinician);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getClinician = async (req, res) => {
    try {
        const getClinician = await Clinician.find();
        res.status(200).json(getClinician);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}