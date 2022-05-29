require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
  });

  cloudinary.uploader
    .upload("./test-dog.jpeg")
    .then((result) => {
        console.log("success", JSON.stringify(result))
    })
    .catch((error) => {
        console.log("error", JSON.stringify(error))
    });