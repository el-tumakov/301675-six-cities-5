import React from "react";
import renderer from "react-test-renderer";
import withSort from "./with-sort";
import {noop} from "../../utils";


const MockComponent = () => (
  <React.Fragment />
);

const MockComponentWrapped = withSort(MockComponent);

it(`Should withSort render correctly`, () => {
  const tree = renderer
      .create((
        <MockComponentWrapped
          isSortOpened={true}
          onSortFocus={noop}
          onSortBlur={noop}
        />
      ), {
        createNodeMock() {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
