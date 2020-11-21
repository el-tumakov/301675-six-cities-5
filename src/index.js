import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./components/app/app";
import ErrorScreen from "./components/error-screen/error-screen";
import {fetchOffers} from "./store/api-actions";
import store from "./store/store";


Promise.all([
  store.dispatch(fetchOffers())
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
})
.catch(() => {
  ReactDOM.render(
      <ErrorScreen />,
      document.querySelector(`#root`)
  );
});
