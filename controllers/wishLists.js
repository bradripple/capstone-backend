require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const passport = require("passport");

const { Image, User, WishList } = require("../models");

router.get("/", passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { id } = req.user;
    console.log('hit wishlist GET route')

    try {
        let currentUser = await User.findById(id).populate({
            path: 'wishList',
            populate: {
                path: 'images',
                model: 'Image'
            }
        });
        console.log('hit try block', currentUser);

        res.status(200).json({
            wishlist: currentUser.wishList
        })
    } catch (error) {
        res.status(500).json({
            message: "There was an error. Please try again."
        });
    }
})

router.put("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const { id } = req.user;
    const imageId = req.body.image;
    console.log('hit wishlist put route', imageId);

    try {
        let currentUser = await User.findById(id).populate('wishList');
        console.log('currentUser', currentUser);
        currentUser.wishList.images.push(imageId);
        await currentUser.wishList.save();

        console.log("currentUser wishlist", currentUser);
        res.json(currentUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "There was an error. Please try again."
        });
        
    }
})

router.delete('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    console.log('hit wishlist delete route', req.body);
    
    try {
        const { id } = req.user;
        const imageId = req.params.id;
        let currentUser = await User.findById(id).populate('wishList');
        console.log('imageid currentuser delete', currentUser.wishList.images);
        currentUser.wishList.images.pull(imageId);
        await currentUser.wishList.save();
        console.log('currentUser after deletion', currentUser);

       
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "There was an error. Please try again."
        });
    }

})

module.exports = router;
