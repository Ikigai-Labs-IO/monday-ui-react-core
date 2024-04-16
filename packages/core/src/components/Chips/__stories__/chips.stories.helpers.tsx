import { StorybookLink, Tip } from "@ikigailabs/storybook-components";

export const TipLabel = () => (
  <Tip>
    Chips will always show up in context of a field. If you just need to add information, use{" "}
    <StorybookLink page="Data display/Label" size={StorybookLink.sizes.SMALL}>
      Label.
    </StorybookLink>
  </Tip>
);
