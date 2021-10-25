const { Image } = require('./models')

async function makeNewImage() {
    
    let newImage = await Image.create({
        "name": "Delicate",
        "url": "https://i.imgur.com/pWAeSmu.jpg",
        "location": "Utah",
        "subject": ["Desert", "Mountains"]
    });

    console.log(newImage);
};

makeNewImage();