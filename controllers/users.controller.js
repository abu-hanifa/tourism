const { json } = require("express");
const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.usersController = {
  getAllUsers: async (req, res) => {
    const users = await User.find();
    res.json(users);
  },

  registerUsers: async (req, res) => {
    const { name, lastname, email, password } = req.body;
    const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));
    const candidate = await User.findOne({ email: email });
    if (candidate) {
      return res.status(401).json({ error: "такой уже есть" });
    }
    const user = await User.create({
      email: email,
      name: name,
      lastname: lastname,
      password: hash,
    });
    res.json(user);
  },
  
  email: async (req, res) => {
    try {
      const { email, password } = req.body;
      const candidate = await User.findOne({ email: email });
      if (!candidate) {
        return res.status(401).json({ error: "неверный email" });
      }
      const valid = await bcrypt.compare(password, candidate.password);
      if (!valid) {
        return res.status(401).json({ error: "неверный пароль" });
      }
      const payload = {
        id: candidate._id,
        email: candidate.email,
      };
      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h",
      });
      res.json({ token });
    } catch (error) {
      res.json(error.message);
    }
  },
};
