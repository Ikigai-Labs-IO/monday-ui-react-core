import { StorybookLink, Tip } from "@ikigailabs/storybook-components";

export const TipIconButton = () => (
  <Tip>
    If you need to use icon as button with no text, check out{" "}
    <StorybookLink page="Buttons/IconButton" size={StorybookLink.sizes.SMALL}>
      IconButton
    </StorybookLink>{" "}
    component
  </Tip>
);
