import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "../constants";

import * as actions from "../actions";
import configureStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureStore([thunkMiddleware]);

describe("setSearchField actions", () => {
  it("should create an action to search robots", () => {
    const text = "wooo";
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: text
    };

    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe("requestRobots actions", () => {
  const mockResponse = (status, statusText, response) => {
    return new window.Response(response, {
      status: status,
      statusText: statusText,
      headers: {
        "Content-type": "application/json"
      }
    });
  };

  it("handles requesting robot api", () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING
    };
    expect(action[0]).toEqual(expectedAction);
  });

  it("handles requesting REQUEST_ROBOTS_SUCCESS", () => {
    const store = mockStore();
    const expectedRobots = [
      {
        id: 1,
        name: "Jon Snow",
        email: "jon.snow@gmail.com"
      }
    ];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve(
        mockResponse(200, null, JSON.stringify(expectedRobots))
      );
    });

    return store.dispatch(actions.requestRobots(store.dispatch)).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions).toContainEqual({
        type: REQUEST_ROBOTS_SUCCESS,
        payload: expectedRobots
      });
    });
  });

  it("handle requesting REQUEST_ROBOTS_FAILED", () => {
    const store = mockStore();
    const expectedError = { status: 400, statusText: "Test Error" };
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject(JSON.stringify(expectedError)));

    return store.dispatch(actions.requestRobots(store.dispatch)).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions).toContainEqual({
        type: REQUEST_ROBOTS_FAILED,
        payload: JSON.stringify(expectedError)
      });
    });
  });
});
