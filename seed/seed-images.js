const { Image } = require("../models");
const data = require('../images.json');

Image.deleteMany({}, (err, deletedImages) => {
  if (err) console.log(err);
  console.log(deletedImages);
    Image.create(data.images, (err, seededImages) => {
        if (err) console.log(err);

        console.log(seededImages);
        console.log(data.images.length, 'components created successfully');

        process.exit();
    });
});
