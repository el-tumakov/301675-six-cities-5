import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Sort from "./sort";
import {SortTypes} from "../../const";


configure({adapter: new Adapter()});

it(`Should cityLink be pressed`, () => {
  const onChangeSort = jest.fn();

  const wrapper = shallow(
      <Sort
        activeSort={SortTypes.POPULAR}
        onChangeSort={onChangeSort}
      />
  );

  const sortOption = wrapper.find(`.places__option`).at(1);

  sortOption.simulate(`mousedown`, {preventDefault() {}});
  expect(onChangeSort).toHaveBeenCalledTimes(1);
});
