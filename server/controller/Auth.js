import users from "../Models/Auth.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from 'dotenv';

export const Signup = async (req, res) => {
  dotenv.config();
  const {name, email, password } = req.body;
  try {
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Users already exists..." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await users.create({name, email, password: hashedPassword });
    const token = jwt.sign(
      { email: newUser.email, id : newUser._id},
      process.env.JWT_SECRET,

      { expiresIn: "2hr" }
    );

    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong..." });
    console.log(error);
  }
};

export const LogIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const exstinguser = await users.findOne({ email });
    if (!exstinguser) {
      return res.status(404).json({ message: "User don't exist..." });
    }

    const isPassCrt = await bcrypt.compare(password, exstinguser.password);
    if (!isPassCrt) {
      return res.status(400).json({ message: "Invalid creditial..." });
    }
    const token = jwt.sign(
      // JWT then uses the sign() method to create a JSON Web Token for that user and returns the token in the form of a JSON string.
      { email: exstinguser.email, id: exstinguser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1hr" }
    );
    // id: exstinguser._id it will create by mongodb
    res.status(200).json({ result: exstinguser, token });
    // JWT then uses the sign() method to create a JSON Web Token for that user and returns the token in the form of a JSON string.

    // JWTs are mainly used for authentication. After a user signs in to an application, the application then assigns JWT to that user. Subsequent requests by the user will include the assigned JWT. This token tells the server what routes, services, and resources the user is allowed to access.
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
};

