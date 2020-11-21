import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import CityList from "./city-list";
import {noop} from "../../utils";
import {CITIES} from "../../const";


it(`Should CityList render correctly`, () => {
  const tree = renderer
      .create(
          <BrowserRouter>
            <CityList
              onChangeCity={noop}
              activeCity={CITIES[0]}
            />
          </BrowserRouter>
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
