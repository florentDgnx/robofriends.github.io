import { shallow } from "enzyme";
import React from "react";
import CounterButton from "../components/CounterButton";

describe("counter button tests", () => {
  it("expect to render CounterButton component", () => {
    const mockColor = "red";
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
  });

  it("update count state", () => {
    const mockColor = "red";
    const counterButton = shallow(<CounterButton color={mockColor} />);
    expect(counterButton.instance().state.count).toEqual(0);
    counterButton.instance().updateCount();
    expect(counterButton.instance().state.count).toEqual(1);
  });

  it("click counter button", () => {
    const mockColor = "red";
    const counterButton = shallow(<CounterButton color={mockColor} />);
    counterButton.find('[id="counter"]').simulate("click");
    expect(counterButton.state()).toEqual({ count: 1 });
  });
});
