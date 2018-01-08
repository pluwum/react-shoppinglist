import { renderComponent, expect } from "../test_helper";
import Footer from "../../src/components/nav/footer";

describe("Test Footer Bar Component", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Footer);
  });

  it("renders something", () => {
    expect(component).to.exist;
  });
  it("Displays the copy right text", () => {
    expect(component).to.contain(
      "Copyright © 2018 Patrick Luwum. All rights reserved."
    );
  });
});
