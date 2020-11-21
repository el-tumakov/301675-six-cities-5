import React, {useRef} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Header from "../header/header";
import {login} from "../../store/api-actions";
import {ActionCreator} from "../../store/action";


const CITY = `Amsterdam`;

const LoginScreen = (props) => {
  const {onSubmit, onChangeCity} = props;

  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              onSubmit={(evt) => {
                evt.preventDefault();

                onSubmit({
                  login: loginRef.current.value,
                  password: passwordRef.current.value,
                });
              }}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to="/"
                onClick={() => {
                  onChangeCity(CITY);
                }}
              >
                <span>{CITY}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

LoginScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChangeCity: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {LoginScreen};
export default connect(null, mapDispatchToProps)(LoginScreen);
