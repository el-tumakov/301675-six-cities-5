import React from "react";
import OfferCard from "../offer-card/offer-card";
import {CardImageSizes} from "../../const";


const OfferCardFavorite = (props) => {
  return (
    <OfferCard
      articleClassName={`favorites__card`}
      imageClassName={`favorites__image-wrapper`}
      infoClassName={`favorites__card-info`}
      imageWidth={CardImageSizes.FAVORITE_WIDTH}
      imageHeight={CardImageSizes.FAVORITE_HEIGHT}
      {...props}
    />
  );
};

export default OfferCardFavorite;
