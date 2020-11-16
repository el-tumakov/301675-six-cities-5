import React from "react";
import renderer from "react-test-renderer";
import {RoomComment} from "./room-comment";
import {noop} from "../../utils";


it(`Should RoomComment render correctly`, () => {
  const tree = renderer
      .create(
          <RoomComment
            onSubmit={noop}
            offerId={1}
          />
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
