const express = require("express");
const router = express.Router();

const {
  getData
} = require("../controllers/dataController");

//get note info
//read
router.get("/", getData);


module.exports = router;