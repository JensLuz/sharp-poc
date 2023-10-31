// Resize image & compress to jpeg using sharp
// Source: https://www.digitalocean.com/community/tutorials/how-to-process-images-in-node-js-with-sharp

const sharp = require("sharp");

async function resizeImage() {
  try {
    await sharp("oppenheimer-cover.jpg")
      .resize({
        width: 177,
        height: 252,
        fit: "cover"
      })
      .toFormat("jpeg", { colours: 8, quality: 90 })
      .toColorspace("srgb")
      .toFile("oppenheimer-cover-resized-srgb-8.jpg");
  } catch (error) {
    console.log(error);
  }
}

resizeImage();