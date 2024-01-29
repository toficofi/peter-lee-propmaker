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

async function processImages() {
  const images = await Promise.all(portfolio_images.map(async (item: any) => {
    const url = item.image as string;
  
    const filePath = path.join(process.cwd(), `./${url}`);
    const file = fs.readFileSync(filePath);
  
    // measure w/h frombuffer
    const { width, height } = probe.sync(file)!;

    const { base64 } = await getPlaiceholder(file)

    const src = url.replaceAll("/public", "")
  
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
    }
  }));

  return images
}


export default async function Portfolio() {
  const images = await processImages();

  return (
    <div className="bg-neutral-100">
      <div className="max-w-container mx-auto">
        <PortfolioPhotos images={images} />
      </div>
    </div>
  );
}
