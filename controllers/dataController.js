// const Goal = require("../models/goalModel");

const getGoals = async (req, res) => {
  try {
    const goal = await Goal.find();

    res.status(200).json(goal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = { getGoals };