import { StorybookLink, Tip } from "@ikigailabs/storybook-components";

export const TipDropdown = () => (
  <Tip>
    When there’s limited space or no default selection, consider using a select{" "}
    <StorybookLink page="Inputs/Dropdown" size={StorybookLink.sizes.SMALL}>
      Dropdown
    </StorybookLink>{" "}
    instead.
  </Tip>
);
