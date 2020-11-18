import React from "react";
import PropTypes from "prop-types";
import {offersProps} from "../../prop-types";


const OffersList = (props) => {
  const {
    offers,
    className,
    Component
  } = props;

  return (
    <div className={className}>
      {offers.map((offer) => (
        <Component
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
};

OffersList.propTypes = {
  offers: offersProps,
  className: PropTypes.string.isRequired,
  Component: PropTypes.func.isRequired
};

export default OffersList;
