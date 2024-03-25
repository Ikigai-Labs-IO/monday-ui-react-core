import { ToastType } from "./ToastConstants";

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
