import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import {LoginScreen} from "./login-screen";
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

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

configure({adapter: new Adapter()});

it(`Submitting the form will trigger a callback`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      offers: OFFERS,
      userData: {},
      reviews: [],
      favoriteOffers: [OFFERS],
      nearbyOffers: []
    },
    [NameSpace.PROCESS]: {
      city: CITIES[0],
      sort: SortTypes.POPULAR,
      hoveredOffer: {}
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH
    }
  });

  const onSubmit = jest.fn();

  const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <LoginScreen
            onSubmit={onSubmit}
          />
        </BrowserRouter>
      </Provider>
  );

  const loginForm = wrapper.find(`form`);

  loginForm.simulate(`submit`, {preventDefault() {}});

  expect(onSubmit).toHaveBeenCalledTimes(1);
});
