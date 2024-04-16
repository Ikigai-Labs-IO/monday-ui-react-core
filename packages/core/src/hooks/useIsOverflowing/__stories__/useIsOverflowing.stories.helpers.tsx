import { StorybookLink, Tip } from "@ikigailabs/storybook-components";

export const TipTooltip = () => (
  <Tip title={"What to do when overflow is detected?"}>
    You might want to use{" "}
    <StorybookLink size={StorybookLink.sizes.SMALL} page="Popover/Tooltip">
      Tooltip
    </StorybookLink>{" "}
    to display all the content.
  </Tip>
);
