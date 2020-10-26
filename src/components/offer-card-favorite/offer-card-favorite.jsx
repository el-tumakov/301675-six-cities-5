import React from "react";
import OfferCard from "../offer-card/offer-card";

const OfferCardFavorite = (props) => {
  return (
    <OfferCard
      articleClassName={`favorites__card`}
      imageClassName={`favorites__image-wrapper`}
      infoClassName={`favorites__card-info`}
      ratingStyle={{width: `100%`}}
      {...props}
    />
  );
};

export default OfferCardFavorite;
