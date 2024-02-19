import users from "../models/userModel.js";
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await users.findOne({ username: username });
        if (user) {
            const validPassword = await bcrypt.compare(password, user.password);
            if (validPassword) {
                res.status(200).json(user);
            } else {
                res.status(404).json("Invalid credentials");
            }
        } else {
            res.status(404).json("User not found");
        }
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json("User not found");
        }
    }   catch (error) {
        res.status(404).json({ message: error });
    }
}

export const register = async (req, res) => {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new users({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
        role: req.body.role
    });
    
    try {
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error });
    }
}