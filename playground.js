const { Image } = require('./models')

async function makeNewImage() {
    
    let newImage = await Image.create({
        "name": "Brimstone Gulch",
        "url": "https://i.imgur.com/yBOmb4W.jpg",
        "location": "Utah",
        "subject": ["Desert", "Canyon"]
    });

    console.log(newImage);
};

makeNewImage();