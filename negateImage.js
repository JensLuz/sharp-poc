// Negative of image using sharp
// Source: https://sharp.pixelplumbing.com/api-operation#negate

const sharp = require("sharp");

async function negateImage() {
  try {
    await sharp("sammy.png")
      .negate()
      .toFile("sammy-negative.png");
  } catch (error) {
    console.log(error);
  }
}

negateImage();