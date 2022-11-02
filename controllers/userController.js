const User = require("../models/user");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json({ users });
};

const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json({ user });
};

const updateUser = async (req, res) => {
  const updatedUser = await User.findOneAndUpdate(req.params.id, req.body);
  res.json({ success: true, user: updatedUser });
};

const createUser = async (req, res) => {
  const newUser = await User.create(req.body);
  res.json({ success: true, newUser: newUser });
};

const deleteUser = async (req, res) => {
  await User.findOneAndDelete(req.params.age);
  res.json({ success: true });
};

module.exports = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  createUser,
};
