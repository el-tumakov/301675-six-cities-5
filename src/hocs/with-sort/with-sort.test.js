import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withSort from "./with-sort";
import {noop} from "../../utils";


const MockComponent = (props) => {
  const {children} = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

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
