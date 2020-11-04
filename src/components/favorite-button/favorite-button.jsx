import React from "react";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../const";


const FavoriteButton = (props) => {
  const {favorite, authorizationStatus} = props;
  const history = useHistory();

  return (
    <button
      className={
        `${
          favorite
            ? `place-card__bookmark-button--active`
            : ``
        } place-card__bookmark-button button`
      }
      type="button"
      onClick={(evt) => {
        evt.preventDefault();
        return authorizationStatus === AuthorizationStatus.NO_AUTH
          ? history.push(`/login`)
          : ``;
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
  favorite: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});

export {FavoriteButton};
export default connect(mapStateToProps, null)(FavoriteButton);
