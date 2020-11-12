import React from "react";
import renderer from "react-test-renderer";
import {FavoriteButton} from "./favorite-button";
import {noop} from "../../utils";
import {AuthorizationStatus, FavoriteButtonSizes} from "../../const";


jest.mock(`react-router-dom`, () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it(`Should FavoriteButtonMain render correctly`, () => {
  const tree = renderer
      .create(
          <FavoriteButton
            id={1}
            favorite={true}
            authorizationStatus={AuthorizationStatus.AUTH}
            onButtonClick={noop}
            buttonClassName={`place-card__bookmark`}
            buttonWidth={FavoriteButtonSizes.MAIN_WIDTH}
            buttonHeight={FavoriteButtonSizes.MAIN_HEIGHT}
          />
      ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should FavoriteButtonRoom render correctly`, () => {
  const tree = renderer
      .create(
          <FavoriteButton
            id={2}
            favorite={false}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            onButtonClick={noop}
            buttonClassName={`property__bookmark`}
            buttonWidth={FavoriteButtonSizes.ROOM_WIDTH}
            buttonHeight={FavoriteButtonSizes.ROOM_HEIGHT}
          />
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
