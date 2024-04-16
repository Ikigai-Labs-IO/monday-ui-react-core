import { createComponentTemplate, MultipleStoryElementsWrapper } from "storybook-components";
import Toggle from "../Toggle";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import "./toggle.stories.scss";
import { ToggleColor } from "../ToggleConstants";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Toggle,
  enumPropNamesArray: [],
  iconPropNamesArray: [],
  actionPropsArray: ["onChange"]
});

export default {
  title: "Inputs/Toggle",
  component: Toggle,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const toggleTemplate = createComponentTemplate(Toggle);

export const Overview = {
  render: toggleTemplate.bind({}),
  name: "Overview"
};

export const On = {
  render: () => <Toggle onOverrideText="" offOverrideText="" />,

  name: "On"
};

export const Off = {
  render: () => <Toggle isDefaultSelected={false} onOverrideText="" offOverrideText="" />,

  name: "Off"
};

export const States = {
  render: () => (
    <MultipleStoryElementsWrapper className="monday-storybook-toggle_column">
      <Toggle isDefaultSelected={false} offOverrideText="Default" onOverrideText="Label" />
      <Toggle offOverrideText="Checked" onOverrideText="Label" />
      <Toggle isDefaultSelected={false} offOverrideText="Disabled" disabled onOverrideText="Label" />
      <Toggle offOverrideText="Disabled Checked" disabled onOverrideText="Label" />
    </MultipleStoryElementsWrapper>
  ),

  name: "States"
};

export const Colors = {
  render: () => (
    <MultipleStoryElementsWrapper className="monday-storybook-toggle_column">
      <Toggle toggleColor={ToggleColor.WARNING} offOverrideText="" onOverrideText="Warning" />
      <Toggle toggleColor={ToggleColor.SUCCESS} offOverrideText="" onOverrideText="Success" />
      <Toggle toggleColor={ToggleColor.PRIMARY} offOverrideText="" onOverrideText="Notification" />
    </MultipleStoryElementsWrapper>
  ),

  name: "Colors"
};

export const TurnOnOffAnAutomation = {
  render: () => (
    <>
      <h5>Board automations</h5>
      <Toggle />
    </>
  ),
  name: "Turn on/ off an automation"
};
