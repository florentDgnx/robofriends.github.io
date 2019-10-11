import { shallow } from "enzyme";
import React from "react";
import CardList from "../components/CardList";

const mockRobots = [
  {
    id: 1,
    name: "Jon Snow",
    username: "Jon",
    email: "jon.snow@gmail.com"
  },
  {
    id: 2,
    name: "Samwell Traly",
    username: "Sam",
    email: "samwell.tarly@gmail.com"
  }
];

it("expect to render CardList component", () => {
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
