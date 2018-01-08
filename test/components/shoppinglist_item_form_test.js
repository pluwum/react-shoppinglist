import { renderComponent, expect } from "../test_helper";
import ShoppingListItemForm from "../../src/components/item/form";

describe("Test Shopping list item form Component", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(ShoppingListItemForm);
  });

  it("renders something", () => {
    expect(component).to.exist;
  });
});
