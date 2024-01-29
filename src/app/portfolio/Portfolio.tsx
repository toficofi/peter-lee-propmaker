import { portfolio_images } from "../home/data";
import PhotoAlbum from "react-photo-album";
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
import probe from "probe-image-size";
import fs from "fs";
import path from "path";

import Image from "next/image";
import type { Photo, RenderPhotoProps } from "react-photo-album";
import PortfolioPhotos from "./PortfolioPhotos";
import { getPlaiceholder } from "plaiceholder";
import { SearchIcon } from "lucide-react";

async function processImages() {
  const images = await Promise.all(
    portfolio_images.map(async (item: any) => {
      const url = item.image as string;

      const filePath = path.join(process.cwd(), `./${url}`);
      const file = fs.readFileSync(filePath);

      // measure w/h frombuffer
      const { width, height } = probe.sync(file)!;

      const { base64 } = await getPlaiceholder(file);

      const src = url.replaceAll("/public", "");

      return {
        src,
        width,
        height,
        blurDataURL: base64,
        srcSet: breakpoints.map((breakpoint) => {
          const calculatedHeight = Math.round((height / width) * breakpoint);
          return {
            src,
            width: breakpoint,
            height: calculatedHeight,
          };
        }),
      };
    })
  );

  return images;
}

export default async function Portfolio() {
  const images = await processImages();

  return (
    <div className="bg-neutral-100">
      <div className="max-w-container mx-auto p-8">
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            Portfolio
          </h2>
          <p className="text-gray-600 mt-4 max-w-[400px]">
          Featured in this portfolio are single handed makes, collaboration makes and makes I have supervised.
          </p>
          <p className="bg-blue-100 border-l-4 border-l-blue-300 p-2 mt-2 text-sky-800 inline-flex items-center font-medium"><SearchIcon className="w-5 h-5 mr-4"/> Tap an image to expand it</p>
        </div>
        <PortfolioPhotos images={images} />
      </div>
    </div>
  );
}
