import { iconsMetaData } from "@ikigailabs/ui-style/src/Icons/iconsMetaData";
import { createStoryMetaSettings } from "@ikigailabs/storybook-components";
import { CreateStoryMetaSettingsArgs } from "@ikigailabs/storybook-components/types";
import * as AllIcons from "../../components/Icon/Icons";

/**
 * Decorator on createStoryMetaSettings from @ikigailabs/storybook-components - adds icons metadata and icons components to function arguments
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
