import ImageGallery from "react-image-gallery";
import image from "../../../assets/mobile.png";

const images = [
  {
    original: image,
  },
  {
    original: image,
  },
  {
    original: image,
  },
];

export default function ProductGallery() {
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      showFullscreenButton={false}
    />
  );
}
