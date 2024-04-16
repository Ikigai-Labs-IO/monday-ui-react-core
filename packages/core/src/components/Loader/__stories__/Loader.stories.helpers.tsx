import { StorybookLink, Tip } from "storybook-components";

export const TipSkeleton = () => (
  <Tip>
    While loading content consider using{" "}
    <StorybookLink page="Feedback/Skeleton" size={StorybookLink.sizes.SMALL}>
      Skeleton loading
    </StorybookLink>
  </Tip>
);
