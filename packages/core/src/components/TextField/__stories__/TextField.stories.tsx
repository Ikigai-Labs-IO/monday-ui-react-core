import TextField from "../TextField";
import { TextFieldTextType } from "../TextFieldConstants";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "storybook-components";
import { Check, CloseSmall, Email, Show } from "../../Icon/Icons";
import "./TextField.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: TextField,
  enumPropNamesArray: ["type", "size"],
  iconPropNamesArray: ["secondaryIconName", "iconName", "labelIconName"]
});

export default {
  title: "Inputs/TextField",
  component: TextField,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const textFieldTemplate = createComponentTemplate(TextField);

export const Overview = {
  render: textFieldTemplate.bind({}),
  name: "Overview",

  args: {
    title: "Name",
    iconName: Show,

    validation: {
      text: "Helper text"
    },

    wrapperClassName: "monday-storybook-text-field_size",
    showCharCount: true,
    placeholder: "Placeholder text here"
  },
  parameters: {
    controls: {
      // TODO: remove exclusion when prop is removed in next major
      exclude: ["withReadOnlyStyle"]
    }
  }
};

export const Sizes = {
  render: () => (
    <div className="monday-storybook-text-field_column-wrapper">
      <TextField placeholder="Small" />
      <TextField placeholder="Medium" size={TextField.sizes.MEDIUM} />
      <TextField placeholder="Large" size={TextField.sizes.LARGE} />
    </div>
  ),

  name: "Sizes"
};

export const States = {
  render: () => (
    <div className="monday-storybook-text-field_wrapper">
      <div className="monday-storybook-text-field_column-wrapper ">
        <TextField placeholder="With field label" title="Label" />
        <TextField placeholder="Label(Required) field" title="Label" requiredAsterisk />
      </div>
      <div className="monday-storybook-text-field_column-wrapper monday-storybook-text-field_spacing">
        <TextField placeholder="With icon" iconName={Email} />
        <TextField placeholder="With clickable icon" iconName={Email} onIconClick={() => {}} />
        <TextField placeholder="Disabled" disabled />
      </div>
      <div className="monday-storybook-text-field_column-wrapper monday-storybook-text-field_spacing">
        <TextField
          placeholder="Success"
          validation={{
            status: "success"
          }}
          iconName={Check}
        />
        <TextField
          placeholder="Error"
          validation={{
            status: "error"
          }}
          iconName={CloseSmall}
        />
      </div>
    </div>
  ),

  name: "States"
};

export const LabelPositions = {
  render: () => (
    <div className="monday-storybook-text-field_column-wrapper">
      <TextField placeholder="Placeholder text..." title="Label" />
      <TextField placeholder="Placeholder text..." title="Label" labelPosition="left" />
    </div>
  ),

  name: "Label Positions"
};

export const Validation = {
  render: () => (
    <div className="monday-storybook-text-field_column-wrapper">
      <TextField
        placeholder="Validate me"
        title="Name"
        validation={{
          status: "error",
          text: "Only use the letters a-z..."
        }}
      />

      <TextField
        placeholder="Validate me"
        title="Name"
        validation={{
          status: "success",
          text: "Validation text"
        }}
      />
    </div>
  ),

  name: "Validation"
};

export const TextFieldInAForm = {
  render: () => (
    <div className="monday-storybook-text-field_box">
      <h1>Dark Mode Feedback From</h1>
      <div className="monday-storybook-text-field_box_wrapper">
        <TextField title="Your Name" size={TextField.sizes.MEDIUM} placeholder="John Doe" />
        <TextField title="Email" size={TextField.sizes.MEDIUM} placeholder="email@monday.com" />
      </div>
    </div>
  ),

  name: "Text field in a form"
};

export const InputFieldWithPlaceholderText = {
  render: () => (
    <div className="monday-storybook-text-field_size">
      <TextField
        title="Invite with email"
        labelIconName={Email}
        placeholder="Enter one or more email"
        size={TextField.sizes.MEDIUM}
      />
    </div>
  ),

  name: "Input field with placeholder text"
};

export const RequiredInputField = {
  render: () => (
    <div className="monday-storybook-text-field_column-wrapper">
      <TextField placeholder="Your email" title="Email Address" size={TextField.sizes.MEDIUM} requiredAsterisk={true} />
    </div>
  ),

  name: "Required input field"
};

export const InputFieldWithDate = {
  render: () => (
    <div className="monday-storybook-text-field_size">
      <TextField size={TextField.sizes.MEDIUM} type={TextFieldTextType.DATE} />
    </div>
  ),

  name: "Input field with date"
};

export const InputFieldWithDateAndTime = {
  render: () => (
    <div className="monday-storybook-text-field_size">
      <TextField size={TextField.sizes.MEDIUM} type={TextFieldTextType.DATE_TIME} />
    </div>
  ),

  name: "Input field with date and time"
};
