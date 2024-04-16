import { StorybookLink, Tip } from "@ikigailabs/storybook-components";

export const TipEditableHeading = () => (
  <Tip title="Heading components are not editable">
    Check out our{" "}
    <StorybookLink page="Inputs/EditableHeading" size={StorybookLink.sizes.SMALL}>
      EditableHeading
    </StorybookLink>{" "}
    component if you would like to allow users to edit the title text.
  </Tip>
);
