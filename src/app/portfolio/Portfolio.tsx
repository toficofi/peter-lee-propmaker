import { portfolio_images } from "../home/data";
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");
import PhotoAlbum from "react-photo-album";
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
import probe from "probe-image-size";
import fs from "fs";
import path from "path";

import Image from "next/image";
import type { Photo, RenderPhotoProps } from "react-photo-album";
import PortfolioPhotos from "./PortfolioPhotos";
import { getPlaiceholder } from "plaiceholder";
import { HammerIcon, SearchIcon } from "lucide-react";
import {
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderTitle,
} from "@/components/section-header";
import { PhotoEnhanced } from "./portfolio.types";

const CACHE_PATH = path.join(process.cwd(), ".cache/images.json");

const CATEGORY_TITLES = {
  modelmaking: "Modelmaking",
  propmaking: "Propmaking",
  garden_design: "Garden design",
  kobujutsu_training_weapons: "Kobujutsu training weapons",
  lino_prints: "Lino prints",
};

const IS_DEVELOPMENT_SERVER = process.env.NODE_ENV === "development"

async function getImagesInCategories() {
  let result: Record<string, PhotoEnhanced[]> | null = null;

  if (IS_DEVELOPMENT_SERVER) {
    // Only use cache during next dev
    try {
      console.log("Cache found, using cache");
      const cache = fs.readFileSync(CACHE_PATH, "utf-8");
      result = JSON.parse(cache);
      return result;
    } catch (e) {
      console.log("No cache found, generating images");
      fs.mkdirSync(path.dirname(CACHE_PATH), { recursive: true });
    }
  }

  const images: PhotoEnhanced[] = await Promise.all(
    portfolio_images.map(async (item: any) => {
      const url = item.image as string;
      const category = item.category as string;


      const filePath = path.join(process.cwd(), `./${url}`);
      const file = fs.readFileSync(filePath);

      // measure w/h frombuffer
      const { width, height } = probe.sync(file)!;

      const { base64 } = await getPlaiceholder(file);

      const src = url.replaceAll("/public", "").replaceAll(" ", "%20");

      const photo: PhotoEnhanced = {
        src,
        width,
        height,
        category,
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

      return photo;
    })
  );

  result = images.reduce((acc, image) => {
    if (!acc[image.category]) {
      acc[image.category] = [];
    }
    acc[image.category].push(image);
    return acc;
  }, {} as Record<string, PhotoEnhanced[]>);

  if (IS_DEVELOPMENT_SERVER) {
    fs.writeFileSync(CACHE_PATH, JSON.stringify(result));
  }

  return result;
}

export default async function Portfolio() {
  const images = (await getImagesInCategories())!;

  return (
    <div className="bg-neutral-100">
      <div className="max-w-container mx-auto p-container">
        <SectionHeader className="mb-8">
          <SectionHeaderTitle>Portfolio</SectionHeaderTitle>
          <SectionHeaderDescription>
            Featured in this portfolio are single handed makes, collaboration
            makes and makes I have supervised.
          </SectionHeaderDescription>
          <p className="bg-blue-100 border-l-4 border-l-blue-300 p-2 mt-6 pr-4 text-sky-800 inline-flex items-center font-medium">
            <SearchIcon className="w-5 h-5 mr-4" /> Tap an image to expand it
          </p>
        </SectionHeader>
        {Object.keys(images).map((category) => {
          return (
            <div key={category} className="mb-8">
              <h2 className="text-4xl font-light mb-6 font-sans tracking-wide text-left uppercase">
                {CATEGORY_TITLES[category as keyof typeof CATEGORY_TITLES]}
              </h2>
              <PortfolioPhotos photos={images[category]} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
