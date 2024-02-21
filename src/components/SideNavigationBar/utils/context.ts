import * as React from "react";
import { PopoverConfig } from "../SideNavigationBarConstants";

type Props = {
  expanded: boolean;
  expandedDone: boolean;
  handleExpand: () => void;
  setExpandedDone: (v: boolean) => void;
  setExpanded: (v: boolean) => void;
  popoverConfig: PopoverConfig;
};

export const SideNavigationBarContext = React.createContext<Props | undefined>(
  undefined
);
