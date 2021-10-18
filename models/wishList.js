const mongoose = require('mongoose');
const { Schema } = mongoose;

const wishListSchema = new Schema ({
    images: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image'}],
});

const WishList = mongoose.model('WishList', wishListSchema);


module.exports = WishList;