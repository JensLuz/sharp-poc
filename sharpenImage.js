// Sharpen image using sharp
// Source: https://www.digitalocean.com/community/tutorials/how-to-process-images-in-node-js-with-sharp

const sharp = require("sharp");

async function sharpenImage() {
  try {
    await sharp("sammy-alpha-removed.png")
      .sharpen({ sigma: 10 }, {m1: 90000}, {m2: 90000})
      .toFile("sammy-sharp.png");
  } catch (error) {
    console.log(error);
  }
}

sharpenImage();