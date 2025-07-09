import CRO from "../models/CROModel.js";

export const createCR0 = async (req, res) => {
    try {
        const newCRO = new CRO(req.body);
        const savedCRO = await newCRO.save();
        res.status(201).json(savedCRO);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getCRO = async (req, res) => {
    try {
        const cro = await CRO.find();
        res.status(200).json(cro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}