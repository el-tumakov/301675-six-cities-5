import React from "react";
import PropTypes from "prop-types";

const RoomOwner = (props) => {
  const {description, owner} = props;
  const {
    avatar,
    name
  } = owner;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src={avatar} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {name}
        </span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
};

RoomOwner.propTypes = {
  description: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default RoomOwner;
