import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) =>
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))
      && dispatch(ActionCreator.loadUserData(data)))
);

export const fetchReviews = (offerId) => (dispatch, _getState, api) => (
  api.get(`/comments/` + offerId)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
);

export const uploadComment = ({comment, rating}, offerId) => (dispatch, _getState, api) => (
  api.post(`/comments/` + offerId, {comment, rating})
    .then(() => dispatch(fetchReviews(offerId)))
);
