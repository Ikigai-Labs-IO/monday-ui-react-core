import { StorybookLink, Tip } from "@ikigailabs/storybook-components";

export const TipSkeleton = () => (
  <Tip>
    While loading content consider using{" "}
    <StorybookLink page="Feedback/Skeleton" size={StorybookLink.sizes.SMALL}>
      Skeleton loading
    </StorybookLink>
  </Tip>
);
