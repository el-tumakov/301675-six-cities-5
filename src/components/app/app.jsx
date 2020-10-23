import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import RoomScreen from "../room-screen/room-screen";
import withMap from "../../hocs/with-map/with-map";

const MainScreenWrapped = withMap(MainScreen);

const App = (props) => {
  const {
    rentOffersCount,
    offers,
    owners,
    reviews
  } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreenWrapped
            rentOffersCount={rentOffersCount}
            offers={offers}
          />
        </Route>
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
  rentOffersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  owners: PropTypes.arrayOf(PropTypes.object).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default App;
