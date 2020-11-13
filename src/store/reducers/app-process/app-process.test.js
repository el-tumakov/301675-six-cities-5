import {appProcess} from "./app-process";
import {ActionType} from "../../action";
import {CITIES, SortTypes} from "../../../const";


const OFFER = {
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
};

describe(`Process reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(appProcess(void 0, {})).toEqual({
      city: CITIES[0],
      sort: SortTypes.POPULAR,
      hoveredOffer: ``
    });
  });

  it(`Reducer should change city`, () => {
    expect(appProcess({
      city: CITIES[0],
    }, {
      type: ActionType.CHANGE_CITY,
      payload: CITIES[1],
    })).toEqual({
      city: CITIES[1],
    });
  });

  it(`Reducer should change sort`, () => {
    expect(appProcess({
      sort: SortTypes.POPULAR,
    }, {
      type: ActionType.CHANGE_SORT,
      payload: SortTypes.TOP_RATED,
    })).toEqual({
      sort: SortTypes.TOP_RATED,
    });
  });

  it(`Reducer should change hovered offer`, () => {
    expect(appProcess({
      hoveredOffer: ``,
    }, {
      type: ActionType.CHANGE_HOVERED_OFFER,
      payload: OFFER,
    })).toEqual({
      hoveredOffer: OFFER,
    });
  });

  it(`Reducer should reset hovered offer`, () => {
    expect(appProcess({
      hoveredOffer: OFFER,
    }, {
      type: ActionType.RESET_HOVERED_OFFER
    })).toEqual({
      hoveredOffer: ``,
    });
  });
});
