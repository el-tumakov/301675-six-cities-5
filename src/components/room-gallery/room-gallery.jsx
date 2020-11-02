import React from "react";
import PropTypes from "prop-types";

const MAX_PHOTOS = 6;

const RoomGallery = (props) => {
  const {photos} = props;

  const images = [];

  for (let i = 0; i < photos.length; i++) {
    if (i === MAX_PHOTOS) {
      break;
    }

    images.push(photos[i]);
  }

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((photo, i) => (
          <div key={photo + i} className="property__image-wrapper">
            <img className="property__image" src={photo} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
};

RoomGallery.propTypes = {
  photos: PropTypes.array.isRequired,
};

export default RoomGallery;
