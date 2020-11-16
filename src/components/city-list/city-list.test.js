import React from "react";
import renderer from "react-test-renderer";
import CityList from "./city-list";
import {noop} from "../../utils";
import {CITIES} from "../../const";


it(`Should CityList render correctly`, () => {
  const tree = renderer
      .create(
          <CityList
            onChangeCity={noop}
            activeCity={CITIES[0]}
          />
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
