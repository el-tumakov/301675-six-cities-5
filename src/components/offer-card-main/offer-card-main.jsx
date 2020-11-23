import React from "react";
import OfferCard from "../offer-card/offer-card";
import {CardImageSizes} from "../../const";


const OfferCardMain = (props) => {
  return (
    <OfferCard
      articleClassName={`cities__place-card`}
      imageClassName={`cities__image-wrapper`}
      infoClassName={``}
      imageWidth={CardImageSizes.MAIN_WIDTH}
      imageHeight={CardImageSizes.MAIN_HEIGHT}
      {...props}
    />
  );
};

export default OfferCardMain;
