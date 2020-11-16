import React from "react";
import renderer from "react-test-renderer";
import RoomOwner from "./room-owner";


const DESCRIPTION = `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`;
const OWNER = {
  id: 25,
  avatar: `img/avatar-angelina.jpg`,
  name: `Angelina`,
  super: true
};


it(`Should RoomOwner render correctly`, () => {
  const tree = renderer
      .create(
          <RoomOwner
            description={DESCRIPTION}
            owner={OWNER}
          />
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
