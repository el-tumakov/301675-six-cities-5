import React, {useState} from "react";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {setFavorite} from "../../store/api-actions";
import {AuthorizationStatus} from "../../const";


const FavoriteButton = (props) => {
  const {id, favorite, authorizationStatus, onButtonClick} = props;
  const history = useHistory();
  const [isFavorite, changeFavorite] = useState(favorite);

  return (
    <button
      className={
        `${
          isFavorite
            ? `place-card__bookmark-button--active`
            : ``
        } place-card__bookmark-button button`
      }
      type="button"
      onClick={(evt) => {
        evt.preventDefault();

        changeFavorite(!isFavorite);

        return authorizationStatus === AuthorizationStatus.NO_AUTH
          ? history.push(`/login`)
          : onButtonClick(id, +!isFavorite);
      }}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

FavoriteButton.propTypes = {
  id: PropTypes.number.isRequired,
  favorite: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired
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
