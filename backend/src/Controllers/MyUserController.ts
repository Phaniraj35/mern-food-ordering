import { Request, Response } from "express";
import User from "../models/User";

const createCurrentUser = async (req: Request, res: Response) => {
    try {
        const { auth0Id } = req.body;
        const existingUser = await User.findOne({ auth0Id })

        if (existingUser) {
            return res.status(200).json({ message: 'User is already present.'});
        }

        const newUser = new User(req.body);
        await newUser.save();
        return res.status(201).json(newUser.toObject());

    } catch (error) {
        console.log(error, 'creating user ..')
        return res.status(500).json({ message: 'Error encountered while creating user.'})
    }
}

export default {
    createCurrentUser
}