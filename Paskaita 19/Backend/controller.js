import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./models/User.js";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export async function register(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "username and password are required" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    password: hashedPassword,
  });
  await newUser.save();

  res.json({ user: newUser });
}
export async function login(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "username and password are required" });
  }
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ message: "username not found" });
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "password is incorrect" });
  }

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1d" });

  res.json({ token });
}

export async function getUser(req, res) {
  try {
    const users = await User.find({});

    console.log(req.userId);

    res.status(200).json({ users });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
}
