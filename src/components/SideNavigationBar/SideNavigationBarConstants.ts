import * as React from "react";
import { Position } from "./utils/position";
import { ExtendedPopoverAction } from "./ExtendedPopover";
import { SubIcon } from "../../types";

export type Props = {
  children: React.ReactNode | React.ReactNode[];
  header?: React.ReactNode | React.ReactNode[];
  footer?: React.ReactNode | React.ReactNode[];
  position?: string;
  height?: string;
  expandable?: boolean;
  backgroundColor?: string;
  closeOnLeave?: boolean;
  expandableConfig?: ExpandableConfig;
  popoverConfig?: PopoverConfig;
};

export type ExpandedProps = {
  expanded: boolean;
};

export type MenuItemProps = {
  caption: string;
  icon: SubIcon;
  children?: React.ReactNode;
};

export type PopoverConfig = {
  triggerOn: ExtendedPopoverAction;
  closeOn: ExtendedPopoverAction;
  position: Position;
};

export type ExpandableConfig = {
  timingFunction?: "ease-in-out" | "ease-in" | "ease-out" | "ease" | "linear";
  duration?: string;
};

export type SideNavigationBarHeaderProps = {
  title: string;
};
