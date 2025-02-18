import Icon from "../Icon";
import Bolt from "../Icons/components/Bolt";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import { IconsList } from "./icon.stories.helperComponents";
import "./Icon.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Icon,
  enumPropNamesArray: [{ enumName: "type", propName: "iconType" }],
  iconPropNamesArray: ["icon"]
});

const iconTemplate = createComponentTemplate(Icon);

export default {
  title: "Media/Icon",
  component: Icon,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: iconTemplate.bind({}),
  name: "Overview",

  args: {
    icon: Bolt
  }
};

export const VibeIcon = {
  render: () => <Icon iconType={Icon.type.SVG} icon={Bolt} iconLabel="my bolt svg icon" iconSize={16} />,

  name: "Vibe Icon"
};

export const FontIcon = {
  render: () => <Icon iconType={Icon.type.ICON_FONT} iconLabel="my font awesome start icon" icon="fa fa-star" />,

  name: "Font Icon"
};

export const CustomSvg = {
  render: () => (
    <Icon
      iconType={Icon.type.SRC}
      icon="https://cdn.monday.com/images/apps/custom-icons/Form.svg"
      iconLabel="my src awesome icon"
      className="icon-story-custom-icon"
      useCurrentColor
    />
  ),

  name: "Custom SVG"
};

export const Color = {
  render: () => (
    <div
      style={{
        color: "var(--sb-color-sofia_pink)"
      }}
    >
      <Icon isCustomIcon={true} iconName="sideNavCollapse" iconSize="16px" />
    </div>
  ),

  name: "Color"
};

export const IconsListStory = {
  render: IconsList.bind({}),
  name: "Icons List",
  args: {}
};

export const CustomIcon = {
  render: () => <Icon iconType={Icon.type.SVG} isCustomIcon={true} iconName="sideNavCollapse" iconSize="16px" />,

  name: "Custom Icon"
};
