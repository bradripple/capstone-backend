require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const passport = require("passport");

const { Image, User } = require("../models");

router.get("/", async (req, res) => {

  try {
    let images = await Image.find({});

    res.status(200).json({
      images: images,

    });
  } catch (error) {
    console.log("images page", error);
    res.status(500).json({
      message: "There was an error. Please try again.",
    });
  }
});

router.get("/details:idx", async (req, res) => {
  const imageId = req.body.image;
  console.log('hit image details route');
  try {
    let currentImage = await Image.findById(imageId);
    console.log("currentImage", currentImage);
  } catch (error) {
    console.log("images detail", error);
    res.status(500).json({
      message: "There was an error. Please try again."
    });
    
  }
});

module.exports = router;
