import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import RoomScreen from "../room-screen/room-screen";

const App = (props) => {
  const {
    offers,
    owners,
    reviews,
    resetState
  } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={() => {
            resetState();

            return (
              <MainScreen
                offers={offers}
              />
            );
          }}
        />
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen
            offers={offers}
          />
        </Route>
        <Route exact
          path="/offer/:id"
          render={({match}) => (
            <RoomScreen
              id={+match.params.id}
              offers={offers}
              owners={owners}
              reviews={reviews}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  owners: PropTypes.arrayOf(PropTypes.object).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  resetState: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  resetState() {
    dispatch(ActionCreator.resetState());
  }
});


export {App};
export default connect(null, mapDispatchToProps)(App);
