import Icon from "../../Icon/Icon";
import { Close } from "../../Icon/Icons";
import SectionHeader from "../SectionHeader";
import { IconType } from "../../Icon/IconConstants";
import { createComponentTemplate } from "vibe-storybook-components";
import { createStoryMetaSettingsDecorator } from "../../../storybook";

const metaSettings = createStoryMetaSettingsDecorator({
  component: SectionHeader,
  enumPropNamesArray: ["type", "size", "text", "rightElement"],
});

const sectionHeaderTemplate = createComponentTemplate(SectionHeader);

export default {
  title: "Text/SectionHeader",
  component: SectionHeader,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
};

export const Overview = {
  render: sectionHeaderTemplate.bind({}),
  name: "Overview",

  args: {
    text: "Label",
  },
};

export const Variants = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "var(--spacing-xxxl)" }}>
      <SectionHeader text="Flush" />
      <SectionHeader text="Indented" type={SectionHeader.types.INDENTED} />
    </div>
  ),
  name: "Variants"
}

export const Sizes = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "var(--spacing-xl)" }}>
      <SectionHeader text="X Small" size={SectionHeader.sizes.XS} />
      <SectionHeader text="Small" />
      <SectionHeader text="Large" size={SectionHeader.sizes.LARGE} />
    </div>
  ),
  name: "Sizes"
}

export const Types = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "var(--spacing-xl)" }}>
      <SectionHeader text="Label" />
      <SectionHeader text="Label" isNotFilled />
    </div>
  ),
  name: "Types"
}

export const WithRightElement = sectionHeaderTemplate.bind({});
WithRightElement.args = {
  text: "Label",
  rightElement: <Icon iconType={IconType.SVG} icon={Close} />,
};
