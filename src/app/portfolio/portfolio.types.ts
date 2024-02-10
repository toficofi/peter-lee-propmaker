import { Photo } from "react-photo-album";

export interface PhotoEnhanced extends Photo {
  category: string;
  blurDataURL: string;
  caption: string;
}
