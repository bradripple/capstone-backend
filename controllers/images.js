require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const passport = require("passport");

const { Image, User } = require("../models");

router.get("/", passport.authenticate('jwt', { session: false }), async (req, res) => {
  const { id } = req.user;
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


module.exports = router;
