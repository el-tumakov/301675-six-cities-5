import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import RoomScreen from "../room-screen/room-screen";
import PrivateRoute from "../private-route/private-route";


const App = () => (
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
      <PrivateRoute exact
        path="/favorites"
        render={() => (
          <FavoritesScreen />
        )}
      />
      <Route exact
        path="/offer/:id"
        render={({match}) => (
          <RoomScreen
            id={+match.params.id}
          />
        )}
      />
    </Switch>
  </BrowserRouter>
);

export default App;
