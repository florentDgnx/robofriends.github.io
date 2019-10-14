import { shallow } from "enzyme";
import React from "react";
import SearchBox from "../components/SearchBox";

describe("test searchBox component", () => {
  it("expect to render SearchBox component", () => {
    expect(
      shallow(<SearchBox value={"mock value"} onChange={() => {}} />)
    ).toMatchSnapshot();
  });
});
