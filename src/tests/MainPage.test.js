import { shallow } from "enzyme";
import React from "react";
import MainPage from "../components/MainPage";
import { isMainThread } from "worker_threads";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    onSearchChange: jest.fn(),
    robots: [],
    searchField: "",
    pending: false
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

it("expect to render MainPage component", () => {
  expect(wrapper).toMatchSnapshot();
});

it("expect filter robots correctly", () => {
  const mockRobotsArray = [
    {
      id: 3,
      name: "Jon",
      email: "jon@gmail.com"
    }
  ];

  const mockProps2 = {
    onRequestRobots: jest.fn(),
    onSearchChange: jest.fn(),
    robots: mockRobotsArray,
    searchField: "Jon",
    pending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper.instance().filterRobots()).toEqual([]);
  expect(wrapper2.instance().filterRobots()).toEqual(mockRobotsArray);
});

it("expect filter robots correctly 2", () => {
  const mockRobotsArray = [
    {
      id: 3,
      name: "Jon",
      email: "jon@gmail.com"
    }
  ];

  const dummyFilteredRobots = [];

  const mockProps3 = {
    onRequestRobots: jest.fn(),
    onSearchChange: jest.fn(),
    robots: mockRobotsArray,
    searchField: "a",
    pending: false
  };
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterRobots()).toEqual(dummyFilteredRobots);
});

it("expect Loading render", () => {
  const mockProps4 = {
    onRequestRobots: jest.fn(),
    onSearchChange: jest.fn(),
    robots: [],
    searchField: "a",
    isPending: true
  };
  const wrapper4 = shallow(<MainPage {...mockProps4} />);
  expect(wrapper4.html()).toBe('<h1 class="tc">LOADING</h1>');
});
