import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import RoomScreen from "../room-screen/room-screen";
import PrivateRoute from "../private-route/private-route";
import {ActionCreator} from "../../store/action";

const App = (props) => {
  const {resetHoveredOffer} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <PrivateRoute exact
          path="/login"
          render={() => (
            <LoginScreen />
          )}
        />
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact
          path="/offer/:id"
          render={({match}) => {
            resetHoveredOffer();

            return (
              <RoomScreen
                id={+match.params.id}
              />
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  resetHoveredOffer: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  resetHoveredOffer() {
    dispatch(ActionCreator.resetHoveredOffer());
  }
});

export {App};
export default connect(null, mapDispatchToProps)(App);

