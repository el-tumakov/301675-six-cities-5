import React, {useState} from "react";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {setFavorite} from "../../store/api-actions";
import {AuthorizationStatus, ScreenTypes, FavoriteButtonSizes} from "../../const";


const FavoriteButton = (props) => {
  const {
    id,
    favorite,
    authorizationStatus,
    onButtonClick,
    screenType
  } = props;

  const history = useHistory();
  const [isFavorite, changeFavorite] = useState(favorite);

  const handleClick = () => {
    changeFavorite(!isFavorite);

    return authorizationStatus === AuthorizationStatus.NO_AUTH
      ? history.push(`/login`)
      : onButtonClick(id, +!isFavorite);
  };

  let buttonClassName = ``;
  let buttonWidth = ``;
  let buttonHeight = ``;

  switch (screenType) {
    case ScreenTypes.MAIN:
      buttonClassName = `place-card__bookmark`;
      buttonWidth = FavoriteButtonSizes.MAIN_WIDTH;
      buttonHeight = FavoriteButtonSizes.MAIN_HEIGHT;

      break;
    case ScreenTypes.ROOM:
      buttonClassName = `property__bookmark`;
      buttonWidth = FavoriteButtonSizes.ROOM_WIDTH;
      buttonHeight = FavoriteButtonSizes.ROOM_HEIGHT;

      break;
  }

  return (
    <button
      className={
        `${
          isFavorite
            ? `${buttonClassName}-button--active`
            : ``
        } ${buttonClassName}-button button`
      }
      type="button"
      onClick={handleClick}
    >
      <svg className={`place-card__bookmark-icon`} width={buttonWidth} height={buttonHeight}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

FavoriteButton.propTypes = {
  id: PropTypes.number.isRequired,
  favorite: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  screenType: PropTypes.string.isRequired
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onButtonClick(id, status) {
    dispatch(setFavorite(id, status));
  }
});

export {FavoriteButton};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
