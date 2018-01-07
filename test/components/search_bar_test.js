import { renderComponent, expect } from "../test_helper";
import SearchBar from "../../src/components/search/search_bar";

describe("Test Search Bar Component", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(SearchBar);
  });

  it("renders something", () => {
    expect(component).to.exist;
  });
});
