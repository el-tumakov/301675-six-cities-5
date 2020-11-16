import React from "react";
import renderer from "react-test-renderer";
import OffersList from "./offers-list";


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

const component = () => (
  <React.Fragment />
);

it(`Should OffersListMain render correctly`, () => {
  const tree = renderer
      .create(
          <OffersList
            offers={OFFERS}
            className={`cities__places-list places__list tabs__content`}
            Component={component}
          />
      ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should OffersListFavorite render correctly`, () => {
  const tree = renderer
      .create(
          <OffersList
            offers={OFFERS}
            className="favorites__places"
            Component={component}
          />
      ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should OffersListFavorite render correctly`, () => {
  const tree = renderer
      .create(
          <OffersList
            offers={OFFERS}
            className="near-places__list places__list"
            Component={component}
          />
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
