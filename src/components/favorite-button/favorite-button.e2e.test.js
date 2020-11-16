import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FavoriteButton} from "./favorite-button";
import {AuthorizationStatus, FavoriteButtonSizes} from "../../const";


configure({adapter: new Adapter()});

jest.mock(`react-router-dom`, () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it(`Should FavoriteButton be pressed when user is authorized`, () => {
  const onButtonClick = jest.fn();

  const wrapper = shallow(
      <FavoriteButton
        id={1}
        favorite={true}
        authorizationStatus={AuthorizationStatus.AUTH}
        onButtonClick={onButtonClick}
        buttonClassName={`place-card__bookmark`}
        buttonWidth={FavoriteButtonSizes.MAIN_WIDTH}
        buttonHeight={FavoriteButtonSizes.MAIN_HEIGHT}
      />
  );

  const favoriteButton = wrapper.find(`button`);

  favoriteButton.simulate(`click`, {preventDefault() {}});

  expect(onButtonClick).toHaveBeenCalledTimes(1);
});

it(`Should not FavoriteButton be pressed when user is not authorized`, () => {
  const onButtonClick = jest.fn();

  const wrapper = shallow(
      <FavoriteButton
        id={1}
        favorite={true}
        authorizationStatus={AuthorizationStatus.NO_AUTH}
        onButtonClick={onButtonClick}
        buttonClassName={`place-card__bookmark`}
        buttonWidth={FavoriteButtonSizes.MAIN_WIDTH}
        buttonHeight={FavoriteButtonSizes.MAIN_HEIGHT}
      />
  );

  const favoriteButton = wrapper.find(`button`);

  favoriteButton.simulate(`click`, {preventDefault() {}});

  expect(onButtonClick).toHaveBeenCalledTimes(0);
});
