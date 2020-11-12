import React from "react";
import renderer from "react-test-renderer";
import Sort from "./sort";
import {noop} from "../../utils";
import {SortTypes} from "../../const";


it(`Should Sort render correctly`, () => {
  const tree = renderer
      .create(
          <Sort
            activeSort={SortTypes.POPULAR}
            onChangeSort={noop}
            isSortOpened={true}
            onSortFocus={noop}
            onSortBlur={noop}
          />
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
