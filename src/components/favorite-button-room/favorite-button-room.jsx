import React from "react";
import FavoriteButton from "../favorite-button/favorite-button";
import {FavoriteButtonSizes} from "../../const";


const FavoriteButtonRoom = (props) => {
  return (
    <FavoriteButton
      buttonClassName={`property__bookmark`}
      buttonWidth={FavoriteButtonSizes.ROOM_WIDTH}
      buttonHeight={FavoriteButtonSizes.ROOM_HEIGHT}
      {...props}
    />
  );
};

export default FavoriteButtonRoom;
