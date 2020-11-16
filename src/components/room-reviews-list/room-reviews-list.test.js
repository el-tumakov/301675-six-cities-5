import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import {RoomReviewsList} from "./room-reviews-list";
import {SortTypes, CITIES, AuthorizationStatus} from "../../const";
import {NameSpace} from "../../store/reducers/root-reducer";


const OFFERS = [
  {
    bedrooms: 3,
    city: {
      name: `Cologne`,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    favorite: false,
    features: [
      `Laptop friendly workspace`,
      `Washer`,
      `Towels`,
      `Fridge`,
      `Air conditioning`,
      `Baby seat`,
      `Breakfast`
    ],
    guests: 4,
    id: 1,
    location: {latitude: 50.957361, longitude: 6.9509739999999995, zoom: 16},
    owner: {
      id: 25,
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      super: true
    },
    photos: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`
    ],
    premium: false,
    preview: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
    price: 493,
    rating: 3.8,
    title: `The house among olive`,
    type: `house`,
  },
];

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

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it(`Should RoomReviewsList render correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      offers: OFFERS,
      userData: {},
      reviews: [REVIEWS],
      favoriteOffers: OFFERS,
      nearbyOffers: OFFERS
    },
    [NameSpace.PROCESS]: {
      city: CITIES[0],
      sort: SortTypes.POPULAR,
      hoveredOffer: {}
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH
    }
  });

  const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <RoomReviewsList
                reviews={REVIEWS}
                authorizationStatus={AuthorizationStatus.AUTH}
                offerId={1}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
