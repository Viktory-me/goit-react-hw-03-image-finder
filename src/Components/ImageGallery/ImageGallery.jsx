import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images }) {
  return (
    <ul className='ImageGallery'>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
          largeImageUrl={image.largeImageURL}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
