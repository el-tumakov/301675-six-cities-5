import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {appData} from "./app-data";
import {ActionType} from "../../action";
import {
  fetchOffers,
  checkAuth,
  login,
  fetchReviews,
  uploadComment,
  fetchFavoriteOffers,
  setFavorite,
  fetchNearbyOffers
} from "../../api-actions";
import {adaptOffersToClient, adaptReviewsToClient} from "../../../utils";
import {AuthorizationStatus} from "../../../const";


const OFFERS = [
  {
    "bedrooms": 1,
    "city": {
      "name": `Dusseldorf`,
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    "goods": [
      `Baby seat`,
      `Fridge`,
      `Towels`,
      `Air conditioning`,
      `Breakfast`,
      `Washer`,
      `Laptop friendly workspace`,
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "is_pro": true,
      "avatar_url": `img/avatar-angelina.jpg`
    },
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
    ],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 51.204402,
      "longitude": 6.7773140000000005,
      "zoom": 16
    },
    "max_adults": 1,
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
    "price": 129,
    "rating": 2.3,
    "title": `Amazing and Extremely Central Flat`,
    "type": `room`
  },
];

const USER_DATA = {
  "id": 1,
  "email": `test@test.ru`,
  "name": `test`,
  "avatar_url": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/2.jpg`,
  "is_pro": false
};

const REVIEWS = [
  {
    comment: `This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.`,
    date: `2020-10-10T13:38:44.753Z`,
    id: 1,
    rating: 5,
    user: {
      "avatar_url": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/2.jpg`,
      "id": 11,
      "is_pro": false,
      "name": `Jack`
    }
  }
];

const api = createAPI(() => {});

describe(`Data reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(appData(void 0, {})).toEqual({
      offers: [],
      userData: {},
      reviews: [],
      favoriteOffers: [],
      nearbyOffers: []
    });
  });

  it(`Reducer should update offers by load offers`, () => {
    expect(appData({
      offers: [],
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: OFFERS,
    })).toEqual({
      offers: adaptOffersToClient(OFFERS),
    });
  });

  it(`Reducer should update userData by load userData`, () => {
    expect(appData({
      userData: [],
    }, {
      type: ActionType.LOAD_USER_DATA,
      payload: USER_DATA,
    })).toEqual({
      userData: USER_DATA,
    });
  });

  it(`Reducer should update reviews by load reviews`, () => {
    expect(appData({
      reviews: [],
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: REVIEWS,
    })).toEqual({
      reviews: adaptReviewsToClient(REVIEWS),
    });
  });

  it(`Reducer should update favorite offers by load favorite offers`, () => {
    expect(appData({
      favoriteOffers: [],
    }, {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: OFFERS,
    })).toEqual({
      favoriteOffers: adaptOffersToClient(OFFERS),
    });
  });

  it(`Reducer should update nearby offers by load nearby offers`, () => {
    expect(appData({
      nearbyOffers: [],
    }, {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: OFFERS,
    })).toEqual({
      nearbyOffers: adaptOffersToClient(OFFERS),
    });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API GET call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authChecking = checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return authChecking(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API POST call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const userDataLoader = login({login: `test@test.ru`, password: `12345`});

    apiMock
      .onPost(`/login`)
      .reply(200, [{fake: true}]);

    return userDataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_USER_DATA,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API GET call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoader = fetchReviews(1);

    apiMock
      .onGet(`/comments/1`)
      .reply(200, [{fake: true}]);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API POST call to /comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const mockComment = {
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus.`,
      rating: 4
    };
    const commentUploader = uploadComment(mockComment, 1);

    apiMock
      .onPost(`/comments/1`)
      .reply(200, [{fake: true}]);

    return commentUploader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`Should make a correct API GET call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteOffersLoader = fetchFavoriteOffers();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return favoriteOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API POST call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteSetter = setFavorite(1, 1);

    apiMock
      .onPost(`/favorite/1/1`)
      .reply(200, [{fake: true}]);

    return favoriteSetter(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`Should make a correct API call to /comments/:id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const nearbyOffersLoader = fetchNearbyOffers(1);

    apiMock
      .onGet(`/hotels/1/nearby`)
      .reply(200, [{fake: true}]);

    return nearbyOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY_OFFERS,
          payload: [{fake: true}],
        });
      });
  });
});
