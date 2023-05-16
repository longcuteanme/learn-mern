const USER = require("../models/User");

const createUser = async (req, res) => {
  const newUser = new USER(req.body);
  try {
    await newUser.save();
    return res.status(200).json({
        code: 200, status: 'success', elements: isCreComment._id
    });
  } catch (err) {
    return "Fail to create user";
  }
};

module.exports = { createUser };
