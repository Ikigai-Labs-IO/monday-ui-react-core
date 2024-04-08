import React from "react";
import Icon, { IconSubComponentProps } from "../Icon/Icon";
import { defaultIconMap, ToastType } from "./ToastConstants";

export const getIcon = (type: ToastType, icon: string | React.FC<IconSubComponentProps> | null) => {
  /* icon may be node a may be a string */
  if (icon && typeof icon === "object") {
    return icon;
  }
  return icon || defaultIconMap[type] ? (
    <Icon
      iconType={icon ? Icon.type.ICON_FONT : Icon.type.SVG}
      clickable={false}
      icon={icon || defaultIconMap[type]}
      iconSize={20}
      ignoreFocusStyle
    />
  ) : null;
};

export const getFillColorAndIconName = (type: ToastType): { fillColor: string; iconName: string } => {
  switch (type) {
    case ToastType.NORMAL:
      return { fillColor: "#676879", iconName: "info" };
    case ToastType.POSITIVE:
      return { fillColor: "#25D184", iconName: "success" };
    case ToastType.NEGATIVE:
      return { fillColor: "#FE4646", iconName: "cancel" };
    case ToastType.WARNING:
      return { fillColor: "#FFAB48", iconName: "danger" };
    default:
      return { fillColor: "#676879", iconName: "info" };
  }
};
