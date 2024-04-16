import HiddenText from "../HiddenText";
import { createComponentTemplate } from "storybook-components";

const hiddenTextTemplate = createComponentTemplate(HiddenText);

export default {
  title: "Accessibility/HiddenText",
  component: HiddenText
};

export const Overview = {
  render: hiddenTextTemplate.bind({}),
  name: "Overview",

  args: {
    text: "Hello hidden text"
  }
};
