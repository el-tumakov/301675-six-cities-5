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
    .then(({data}) => dispatch(ActionCreator.loadUserData(data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const fetchReviews = (offerId) => (dispatch, _getState, api) => (
  api.get(`/comments/` + offerId)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
);

export const uploadComment = ({comment, rating}, offerId) => (dispatch, _getState, api) => (
  api.post(`/comments/` + offerId, {comment, rating})
    .then(() => dispatch(fetchReviews(offerId)))
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(ActionCreator.loadFavoriteOffers(data)))
);

export const setFavorite = (offerId, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${offerId}/${status}`)
    .then(({data}) => dispatch(ActionCreator.updateFavorite(data)))
    .then(() => dispatch(fetchFavoriteOffers()))
    .catch((err) => {
      throw err;
    })
);

export const fetchNearbyOffers = (offerId) => (dispatch, _getState, api) => (
  api.get(`/hotels/${offerId}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadNearbyOffers(data)))
    .catch((err) => {
      throw err;
    })
);
