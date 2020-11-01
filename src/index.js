import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import owners from "./mocks/owners";
import reviews from "./mocks/reviews";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {composeWithDevTools} from "redux-devtools-extension";

const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App
        offers={offers}
        owners={owners}
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
