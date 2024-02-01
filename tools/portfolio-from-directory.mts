import YAML from "yaml"
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const IMAGES_ROOT = path.join(__dirname, '../public/uploads/portfolio');

// Get all the file names in the images root
const imageFileNames = fs.readdirSync(IMAGES_ROOT);

// Sort the images based on modification time (newest first)
imageFileNames.sort((a, b) => {
  const statA = fs.statSync(path.join(IMAGES_ROOT, a));
  const statB = fs.statSync(path.join(IMAGES_ROOT, b));
  return statB.mtime.getTime() - statA.mtime.getTime();
});

// Define an array to store the YAML structure
const yamlData:any[] = [];

// Iterate through the sorted imageFileNames and create the YAML structure
imageFileNames.forEach((fileName) => {
  const category = 'propmaking'; // Change this to your desired category
  const imagePath ='/public/uploads/portfolio/' + fileName

  const imageData = {
    image: imagePath,
    category: category,
  };

  yamlData.push(imageData);
});

// Convert the array to YAML format using the yaml package
const yamlString = YAML.stringify({ portfolio_images: yamlData });

// Log or do whatever you want with the resulting YAML string
console.log(yamlString);