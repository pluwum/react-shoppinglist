import { renderComponent, expect } from "../test_helper";
import ShoppingListForm from "../../src/components/shoppinglist/form";

describe("Test Shopping list form Component", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(ShoppingListForm);
  });

  it("renders something", () => {
    expect(component).to.exist;
  });
});
