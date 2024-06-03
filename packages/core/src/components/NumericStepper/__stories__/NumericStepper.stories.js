import NumericStepper from "../NumericStepper";
import { createStoryMetaSettingsDecorator } from "../../../storybook";

const metaSettings = createStoryMetaSettingsDecorator({
  component: NumericStepper,
  enumPropNamesArray: []
});

export default {
  title: "Data display/Numeric Stepper",
  component: NumericStepper,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: () => <NumericStepper />,
  name: "Overview"
};
