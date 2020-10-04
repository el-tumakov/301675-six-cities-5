import React from "react";
import MainScreen from "../main-screen/main-screen";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {rentOffersCount} = props;

  return (
    <MainScreen rentOffersCount={rentOffersCount} />
  );
};


export default App;
