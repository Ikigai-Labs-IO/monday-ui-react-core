import { StorybookLink, Tip } from "@ikigailabs/storybook-components";

export const TipButton = () => (
  <Tip>
    If you need an action that does not have context with text{" "}
    <StorybookLink page="Inputs/Combobox" size={StorybookLink.sizes.SMALL}>
      Button
    </StorybookLink>
    .
  </Tip>
);
