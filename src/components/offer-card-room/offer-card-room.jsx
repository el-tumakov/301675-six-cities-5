import React from "react";
import OfferCard from "../offer-card/offer-card";

const OfferCardRoom = (props) => {
  return (
    <OfferCard
      articleClassName={`near-places__card`}
      imageClassName={`near-places__image-wrapper`}
      infoClassName={``}
      ratingStyle={{width: `80%`}}
      {...props}
    />
  );
};

export default OfferCardRoom;
