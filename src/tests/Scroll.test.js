import { shallow } from "enzyme";
import React from "react";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";

it("expect to render Scroll component", () => {
  expect(shallow(<Scroll children={<CardList />} />)).toMatchSnapshot();
});
