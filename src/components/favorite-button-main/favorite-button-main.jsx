import React from "react";
import FavoriteButton from "../favorite-button/favorite-button";
import {FavoriteButtonSizes} from "../../const";


const FavoriteButtonMain = (props) => {
  return (
    <FavoriteButton
      buttonClassName={`place-card__bookmark`}
      buttonWidth={FavoriteButtonSizes.MAIN_WIDTH}
      buttonHeight={FavoriteButtonSizes.MAIN_HEIGHT}
      {...props}
    />
  );
};

export default FavoriteButtonMain;
