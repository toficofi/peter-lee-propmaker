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

interface Props {
  images: Photo[];
}
export default function PortfolioPhotos({ images }: Props) {
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <PhotoAlbum
        photos={images}
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
        slides={images}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}

function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <Image
        fill
        src={photo.src}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        blurDataURL={(photo as any).blurDataURL}
        alt=""
        {...{ title, sizes, className, onClick }}
      />
    </div>
  );
}
