// Blur image using sharp
// Source: https://www.digitalocean.com/community/tutorials/how-to-process-images-in-node-js-with-sharp

const sharp = require("sharp");

async function blurImage() {
  try {
    await sharp("sammy.png")
      .blur(4)
      .toFile("sammy-blurred.png");
  } catch (error) {
    console.log(error);
  }
}

blurImage();