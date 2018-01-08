import { renderComponent, expect } from "../test_helper";
import Spinner from "../../src/components/misc/spinner";

describe("Test Spinner Component", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Spinner);
  });

  it("renders something", () => {
    expect(component).to.exist;
  });

  it("shows correct loading text", () => {
    expect(component).to.contain("Relax while we fetch your data");
  });

  it("shows spinkit component", () => {
    expect(component.find("div.line-spin-fade-loader")).to.exist;
  });
});
