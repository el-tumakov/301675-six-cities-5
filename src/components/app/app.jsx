import React from "react";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen";


const App = (props) => {
  const {rentOffersCount} = props;

  return (
    <MainScreen rentOffersCount={rentOffersCount} />
  );
};

App.propTypes = {
  rentOffersCount: PropTypes.number.isRequired,
};


export default App;
