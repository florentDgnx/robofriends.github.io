import { shallow } from "enzyme";
import React from "react";
import Card from "../components/Card";

it("expect to render Card component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
