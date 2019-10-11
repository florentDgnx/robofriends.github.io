import { shallow } from "enzyme";
import React from "react";
import SearchBox from "../components/SearchBox";

describe("test searchBox component", () => {
  it("expect to render SearchBox component", () => {
    expect(
      shallow(<SearchBox value={"mock value"} onChange={() => {}} />)
    ).toMatchSnapshot();
  });

  // it("expect change input", () => {
  //   const wrapper = shallow(<SearchBox searchField="" />);
  //   const input = wrapper.find('[id="searchInput"]');
  //   input.simulate("keypress", { key: ["t"] });
  //   console.log(input.props());
  //   expect(input.props().value).toEqual("t");
  // });
});
