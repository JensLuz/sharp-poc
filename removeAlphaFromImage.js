// Remove alpha channel from image using sharp
// Source: https://sharp.pixelplumbing.com/api-channel#removealpha

const sharp = require("sharp");

async function removeAlphaFromImage() {
  try {
    await sharp("sammy-transparent.png")
      .removeAlpha()
      .toFile("sammy-alpha-removed.png");
  } catch (error) {
    console.log(error);
  }
}

removeAlphaFromImage();