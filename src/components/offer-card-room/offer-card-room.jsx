import React from "react";
import OfferCard from "../offer-card/offer-card";
import {CardImageSizes} from "../../const";


const OfferCardRoom = (props) => {
  return (
    <OfferCard
      articleClassName={`near-places__card`}
      imageClassName={`near-places__image-wrapper`}
      infoClassName={``}
      imageWidth={CardImageSizes.MAIN_WIDTH}
      imageHeight={CardImageSizes.MAIN_HEIGHT}
      {...props}
    />
  );
};

export default OfferCardRoom;
