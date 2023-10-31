// Combine 1 image over another
// Source: https://www.digitalocean.com/community/tutorials/how-to-process-images-in-node-js-with-sharp

const sharp = require("sharp");

async function compositeImages() {
  try {
    await sharp("underwater.png")
      .composite([
        {
          input: "sammy-transparent.png",
          top: 50,
          left: 50,
        },
      ])
      .toFile("sammy-underwater.png");
  } catch (error) {
    console.log(error);
  }
}

compositeImages()