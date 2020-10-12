import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";

const Settings = {
  RENT_OFFERS_COUNT: 312
};

ReactDOM.render(
    <App
      rentOffersCount={Settings.RENT_OFFERS_COUNT}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
