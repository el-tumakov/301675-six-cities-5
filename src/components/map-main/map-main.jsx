import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Map from "../map/map";


const MapMain = (props) => {
  const {hoveredOffer} = props;

  return (
    <Map
      hoveredOffer={hoveredOffer}
      {...props}
    />
  );
};

MapMain.propTypes = {
  hoveredOffer: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};


const mapStateToProps = ({PROCESS}) => ({
  hoveredOffer: PROCESS.hoveredOffer
});

export {MapMain};
export default connect(mapStateToProps, null)(MapMain);
