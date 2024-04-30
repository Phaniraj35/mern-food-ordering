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

const updateCurrentUser = async (req: Request, res: Response) => {
    try {
        const { name, city, addressLine, country } = req.body;

        const user = await User.findById(req?.userId);

        if (!user) {
            return res.status(404).json({ message: 'Error: User not found'})
        }

        user.addressLine1 = addressLine;
        user.country = country;
        user.city = city;
        user.name = name;

        await user.save();

        return res.send(user);
    } catch(error) {
        console.log(error, "while updating profile");
        return res.status(500).json({ message: 'Error occured while updating profile.'})
    }
}

export default {
    createCurrentUser,
    updateCurrentUser
}