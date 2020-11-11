import React from "react";
import renderer from "react-test-renderer";
import App from "./app";


it(`Should App render correctly`, () => {
  const tree = renderer
      .create(
          <App />
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
