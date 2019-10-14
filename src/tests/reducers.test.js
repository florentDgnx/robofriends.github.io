import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "../constants";

import * as reducers from "../reducers";

describe("searchRobots", () => {
  const initialState = { searchField: "" };

  it("should return initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialState);
  });

  it("handle CHANGE_SEARCH_FIELD", () => {
    expect(
      reducers.searchRobots(initialState, {
        type: CHANGE_SEARCH_FIELD,
        payload: "abc"
      })
    ).toEqual({
      searchField: "abc"
    });
  });
});

describe("requestRobots reducer", () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
    error: ""
  };

  it("should return initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("should handle REQUEST_ROBOTS_PENDING", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING
      })
    ).toEqual({
      robots: [],
      isPending: true,
      error: ""
    });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: "123",
            name: "test",
            email: "test@gmail.com"
          }
        ]
      })
    ).toEqual({
      robots: [
        {
          id: "123",
          name: "test",
          email: "test@gmail.com"
        }
      ],
      isPending: false,
      error: ""
    });
  });

  it("should handle REQUEST_ROBOTS_FAILED", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "test error"
      })
    ).toEqual({
      robots: [],
      isPending: false,
      error: "test error"
    });
  });
});
