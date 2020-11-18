import React from "react";
import renderer from "react-test-renderer";
import Map from "./map";


it(`Should Map render correctly`, () => {
  const tree = renderer
      .create(
          <Map />
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
