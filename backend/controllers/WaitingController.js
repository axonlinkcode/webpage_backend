import Waiting from "../models/WaitingModel.js";

export const createWaiting = async (req,res) =>{
    try {

        const newWaiting = new Waiting(req.body)
        const savedWaiting = await newWaiting.save();
        res.status(201).json(savedWaiting);
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getWaiting = async (req,res) =>{
    try {
        const waiting = await Waiting.find();
        res.status(200).json(waiting);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}