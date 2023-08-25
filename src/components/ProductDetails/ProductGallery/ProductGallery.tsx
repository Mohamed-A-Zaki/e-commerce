import ImageGallery from "react-image-gallery";

type Props = {
  images: string[] | undefined;
};
export default function ProductGallery({ images }: Props) {
  const images_list = (images || []).map((image) => {
    return { original: image };
  });

  return (
    <ImageGallery
      items={images_list}
      showPlayButton={false}
      showFullscreenButton={false}
    />
  );
}
