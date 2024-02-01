import path from "path";
import { fileURLToPath } from 'url';
import fs from "fs"
import YAML from 'yaml'

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const IMAGES_ROOT = path.join(__dirname, "../public/uploads/portfolio");

// Get all the file names in images root
const imageFileNames = fs.readdirSync(IMAGES_ROOT);

// Define an array to store the YAML structure
const yamlData = [];

// Iterate through the imageFileNames and create the YAML structure
imageFileNames.forEach((fileName) => {
    const category = "propmaking"; // Change this to your desired category
    const imagePath = path.join('/public/uploads/portfolio', fileName);

    const imageData = {
        image: imagePath,
        category: category,
    };

    yamlData.push(imageData);
});

// Convert the array to YAML format
const yamlString = YAML.stringify({ portfolio_images: yamlData });

// Log or do whatever you want with the resulting YAML string
console.log(yamlString);