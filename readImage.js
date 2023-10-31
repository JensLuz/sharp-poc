// Read image metadata using sharp
// Source: https://www.digitalocean.com/community/tutorials/how-to-process-images-in-node-js-with-sharp

const sharp = require("sharp");

async function getMetadata() {
  try {
    const metadata = await sharp("sammy.png").metadata();
    console.log(metadata);
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`);
  }
}

getMetadata();