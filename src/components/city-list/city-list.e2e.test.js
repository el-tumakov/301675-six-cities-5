import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CityList from "./city-list";
import {CITIES} from "../../const";


configure({adapter: new Adapter()});

it(`Should cityLink be pressed`, () => {
  const onChangeCity = jest.fn();

  const wrapper = shallow(
      <CityList
        activeCity={CITIES[0]}
        onChangeCity={onChangeCity}
      />
  );

  const cityLink = wrapper.find(`.locations__item-link`);

  cityLink.at(0).simulate(`click`, {preventDefault() {}});

  expect(onChangeCity).toHaveBeenCalledTimes(1);
});
