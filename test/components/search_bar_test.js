import { renderComponent, expect } from "../test_helper";
import SearchBar from "../../src/components/search/search_bar";

// Lets group together similar test
describe("Test Search Bar Component", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(SearchBar);
  });

  // Lets test that it renders
  it("renders the component", () => {
    expect(component).to.exist;
  });

  // Lets test that the search bar has an input box
  it("has a text input", () => {
    expect(component.find("input")).to.exist;
  });

  // Lets test that the search bar has an button
  it("has a button", () => {
    expect(component.find("button")).to.exist;
  });

  describe("Test text entered in search bar", () => {
    beforeEach(() => {
      component.find("input").simulate("change", "search term");
    });

    it("shows text entered in input", () => {
      expect(component.find("input")).to.have.value("search term");
    });
  });
});
