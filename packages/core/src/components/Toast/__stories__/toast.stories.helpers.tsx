import { StorybookLink, Tip } from "@ikigailabs/storybook-components";

export const TipAlertBanner = () => (
  <Tip title="Check yourself">
    Need to inform the user about a system’s action? Use an{" "}
    <StorybookLink page="Feedback/AlertBanner" size={StorybookLink.sizes.SMALL}>
      AlertBanner
    </StorybookLink>{" "}
    instead.
  </Tip>
);
