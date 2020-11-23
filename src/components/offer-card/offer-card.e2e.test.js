import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferCard} from "./offer-card";
import {CardImageSizes} from "../../const";

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

configure({adapter: new Adapter()});

it(`Should callback be called when mouse enter and leave on OfferCard`, () => {
  const onHoverOffer = jest.fn();
  const onResetHoveredOffer = jest.fn();

  const wrapper = shallow(
      <OfferCard
        offer={OFFERS[0]}
        articleClassName={`cities__place-card`}
        imageClassName={`cities__image-wrapper`}
        infoClassName={``}
        imageWidth={CardImageSizes.MAIN_WIDTH}
        imageHeight={CardImageSizes.MAIN_HEIGHT}
        onHoverOffer={onHoverOffer}
        onResetHoveredOffer={onResetHoveredOffer}
      />
  );

  const offer = wrapper.find(`article`);

  offer.simulate(`mouseenter`, {preventDefault() {}});
  expect(onHoverOffer).toHaveBeenCalledTimes(1);

  offer.simulate(`mouseleave`, {preventDefault() {}});
  expect(onResetHoveredOffer).toHaveBeenCalledTimes(1);
});
