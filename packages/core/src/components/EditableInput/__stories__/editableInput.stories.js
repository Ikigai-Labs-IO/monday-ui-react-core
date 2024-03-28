import React from "react";
import EditableInput from "../EditableInput";
import { createStoryMetaSettingsDecorator } from "../../../storybook";

const metaSettings = createStoryMetaSettingsDecorator({
  component: EditableInput,
  enumPropNamesArray: ["type", "name", "extra", "files"]
});

export default {
  title: "Components/EditableInput",
  component: EditableInput,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: () => <EditableInput placeholder="Placeholder Label" />,
  name: "Overview"
};

export const Input = {
  render: () => <EditableInput inputType={EditableInput.inputTypes.INPUT} placeholder="Example" />,
  name: "Input"
};

export const TextAreaWithAutoSize = {
  render: () => <EditableInput autoSize inputType={EditableInput.inputTypes.TEXT_AREA} placeholder="Example" />,
  name: "Text Area With AutoSize"
};

export const TextAreaWithoutAutoSize = {
  render: () => <EditableInput inputType={EditableInput.inputTypes.TEXT_AREA} placeholder="Example" />,
  name: "Text Area Without AutoSize"
};
