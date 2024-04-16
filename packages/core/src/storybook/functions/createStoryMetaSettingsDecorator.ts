import { iconsMetaData } from "ui-style/src/Icons/iconsMetaData";
import { createStoryMetaSettings } from "storybook-components";
import { CreateStoryMetaSettingsArgs } from "storybook-components/types";
import * as AllIcons from "../../components/Icon/Icons";

/**
 * Decorator on createStoryMetaSettings from storybook-components - adds icons metadata and icons components to function arguments
 */
export function createStoryMetaSettingsDecorator({
  component,
  enumPropNamesArray,
  iconPropNamesArray,
  actionPropsArray,
  ignoreControlsPropNamesArray
}: Omit<CreateStoryMetaSettingsArgs, "allIconsComponents" | "iconsMetaData">) {
  return createStoryMetaSettings({
    component,
    enumPropNamesArray,
    iconPropNamesArray,
    actionPropsArray,
    ignoreControlsPropNamesArray,
    iconsMetaData,
    allIconsComponents: AllIcons
  });
}

export default createStoryMetaSettingsDecorator;
