import React from "react";
import PropTypes from "prop-types";

const MAX_PHOTOS = 6;

const RoomGallery = (props) => {
  const {photos} = props;

  const images = photos.slice(0, MAX_PHOTOS);

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
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RoomGallery;
