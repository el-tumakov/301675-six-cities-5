import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import owners from "./mocks/owners";
import reviews from "./mocks/reviews";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";

const Settings = {
  RENT_OFFERS_COUNT: 312
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        rentOffersCount={Settings.RENT_OFFERS_COUNT}
        offers={offers}
        owners={owners}
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
