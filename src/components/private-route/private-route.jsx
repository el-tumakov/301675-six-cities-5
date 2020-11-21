import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../const";

const Routes = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`
};

const PrivateRoute = (props) => {
  const {onRender, path, exact, authorizationStatus} = props;

  const handleRender = (routeProps) => {
    switch (path) {
      case Routes.LOGIN:
        return (
          authorizationStatus === AuthorizationStatus.NO_AUTH
            ? onRender(routeProps)
            : <Redirect to={Routes.MAIN} />
        );

      case Routes.FAVORITES:
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? onRender(routeProps)
            : <Redirect to={Routes.LOGIN} />
        );
    }

    return onRender(routeProps);
  };

  return (
    <Route
      path={path}
      exact={exact}
      render={handleRender}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  onRender: PropTypes.func.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
