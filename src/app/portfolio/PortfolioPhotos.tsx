"use client";

import Image from "next/image";
import PhotoAlbum, { Photo, RenderPhotoProps } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { PhotoEnhanced } from "./portfolio.types";

interface Props {
  photos: PhotoEnhanced[];
}
export default function PortfolioPhotos({ photos }: Props) {
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <PhotoAlbum
        photos={photos as Photo[]} // react-photo-album types are not compatible with our custom types
        layout="rows"
        spacing={4}
        renderPhoto={NextJsImage}
        defaultContainerWidth={1200}
        onClick={({ index }) => setIndex(index)}
        sizes={{
          size: "calc(100vw - 40px)",
          sizes: [
            { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
            { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
            { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
          ],
        }}
      />
      <Lightbox
        slides={photos as Photo[]}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Thumbnails, Zoom]}
      />
    </div>
  );
}

function NextJsImage({
  photo,
  imageProps: { alt, title, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  const photoEnhanced = photo as PhotoEnhanced;

  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      {photoEnhanced.caption && (
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 p-2 flex items-end justify-end pointer-events-none z-10">
          <div className="rounded-lg px-2 py-1 bg-black bg-opacity-80 text-white text-sm uppercase font-semibold truncate">
            {photoEnhanced.caption}
          </div>
        </div>
      )}

      <Image
        src={photo.src}
        className={cn("hover:brightness-50 transition", className)}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        blurDataURL={(photo as any).blurDataURL}
        alt=""
        {...{ title, width: photo.width, height: photo.height, onClick }}
      />
    </div>
  );
}
