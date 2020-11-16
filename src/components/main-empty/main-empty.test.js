import React from "react";
import renderer from "react-test-renderer";
import MainEmpty from "./main-empty";
import {CITIES} from "../../const";


it(`Should MainEmpty render correctly`, () => {
  const tree = renderer
      .create(
          <MainEmpty
            city={CITIES[0]}
          />
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
