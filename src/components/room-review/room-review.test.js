import React from "react";
import renderer from "react-test-renderer";
import RoomReview from "./room-review";


const REVIEW = {
  comment: `This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.`,
  date: `2020-10-10T13:38:44.753Z`,
  id: 1,
  rating: 5,
  user: {
    "avatar_url": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/2.jpg`,
    "id": 11,
    "is_pro": false,
    "name": `Jack`
  }
};

it(`Should RoomReview render correctly`, () => {
  const tree = renderer
      .create(
          <RoomReview
            review={REVIEW}
          />
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
