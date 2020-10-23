import React from "react";
import OfferCard from "../offer-card/offer-card";

const OfferCardMain = (props) => {
  return (
    <OfferCard
      articleClassName={`cities__place-card`}
      imageClassName={`cities__image-wrapper`}
      infoClassName={``}
      ratingStyle={{width: `80%`}}
      {...props}
    />
  );
};

export default OfferCardMain;
