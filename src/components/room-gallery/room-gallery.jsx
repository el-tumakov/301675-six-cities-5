import React from "react";
import PropTypes from "prop-types";

const RoomGallery = (props) => {
  const {photos} = props;

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {photos.map((photo) => (
          <div key={photo} className="property__image-wrapper">
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
