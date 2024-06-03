import ProgressRing from "../ProgressRing";
import { createStoryMetaSettingsDecorator } from "../../../storybook";

const metaSettings = createStoryMetaSettingsDecorator({
  component: ProgressRing,
  enumPropNamesArray: []
});

export default {
  title: "Feedback/Progress Ring",
  component: ProgressRing,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: () => <ProgressRing value={50} />,
  name: "Overview"
};

export const Sizes = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-xxxl)" }}>
      <ProgressRing value={24} size={ProgressRing.sizes.XXL} />
      <ProgressRing value={24} size={ProgressRing.sizes.XL} />
      <ProgressRing value={24} />
      <ProgressRing value={24} size={ProgressRing.sizes.MEDIUM} />
      <ProgressRing value={24} size={ProgressRing.sizes.SMALL} />
    </div>
  ),
  name: "Sizes"
};

export const Colors = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-xxxl)" }}>
      <ProgressRing value={24} />
      <ProgressRing value={24} color={ProgressRing.colors.SUCCESS} />
      <ProgressRing value={24} color={ProgressRing.colors.ERROR} />
    </div>
  ),
  name: "Colors"
};
