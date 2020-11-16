import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./header";
import {AuthorizationStatus} from "../../const";


const USER_DATA = {
  "id": 1,
  "email": `test@test.ru`,
  "name": `test`,
  "avatar_url": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/2.jpg`,
  "is_pro": false
};

it(`Should Header render correctly`, () => {
  const tree = renderer
      .create(
          <BrowserRouter>
            <Header
              authorizationStatus={AuthorizationStatus.AUTH}
              userData={USER_DATA}
            />
          </BrowserRouter>
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
