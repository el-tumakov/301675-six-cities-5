import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Sort from "./sort";
import {SortTypes} from "../../const";


configure({adapter: new Adapter()});

it(`Should cityLink be pressed`, () => {
  const onChangeSort = jest.fn();
  const onSortFocus = jest.fn();
  const onSortBlur = jest.fn();

  const wrapper = shallow(
      <Sort
        activeSort={SortTypes.POPULAR}
        onChangeSort={onChangeSort}
        isSortOpened={true}
        onSortFocus={onSortFocus}
        onSortBlur={onSortBlur}
      />
  );

  const sortForm = wrapper.find(`form`);
  const sortOption = wrapper.find(`.places__option`).at(1);

  sortForm.simulate(`focus`, {preventDefault() {}});
  expect(onSortFocus).toHaveBeenCalledTimes(1);

  sortForm.simulate(`blur`, {preventDefault() {}});
  expect(onSortBlur).toHaveBeenCalledTimes(1);

  sortOption.simulate(`mousedown`, {preventDefault() {}});
  expect(onChangeSort).toHaveBeenCalledTimes(1);
});
