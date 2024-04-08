export const PANEL_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
} as const;

export type PanelSize = (typeof PANEL_SIZES)[keyof typeof PANEL_SIZES];

export const sizeToWidth: Record<PanelSize, number | string> = {
  [PANEL_SIZES.SMALL]: "260px",
  [PANEL_SIZES.MEDIUM]: "380px",
  [PANEL_SIZES.LARGE]: "650px"
};
