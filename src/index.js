import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import owners from "./mocks/owners";
import reviews from "./mocks/reviews";

const Settings = {
  RENT_OFFERS_COUNT: 312
};

ReactDOM.render(
    <App
      rentOffersCount={Settings.RENT_OFFERS_COUNT}
      offers={offers}
      owners={owners}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
