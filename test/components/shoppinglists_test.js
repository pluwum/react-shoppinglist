import { renderComponent, expect } from "../test_helper";
import ShoppingLists from "../../src/components/shoppinglists";

describe("Test ShoppingLists Component", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(ShoppingLists);
  });

  it("renders something", () => {
    expect(component).to.exist;
  });
});
