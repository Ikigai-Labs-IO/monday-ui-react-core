export enum ToastType {
  NORMAL = "normal",
  POSITIVE = "positive",
  NEGATIVE = "negative",
  WARNING = "warning"
}

export enum ToastActionType {
  LINK = "link",
  BUTTON = "button"
}

export type ToastAction = {
  type: ToastActionType;
  content?: string;
  text?: string;
  href?: string;
};
