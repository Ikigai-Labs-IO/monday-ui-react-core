import * as React from "react";
import { useDisclosure } from "../../Panel/hooks/useDisclosure";
import { PopoverConfig } from "../SideNavigationBarConstants";
import { SideNavigationBarContext } from "./context";

type Props = {
  children: React.ReactNode;
  popoverConfig?: PopoverConfig;
};

const popoverConfigDefault = {
  triggerOn: "hover",
  closeOn: "hover",
  position: "start",
} as const;

export function SideNavigationBarProvider({
  children,
  popoverConfig = popoverConfigDefault,
}: Props) {
  const { isOpen: expanded, toggle: setExpanded } = useDisclosure();
  const {
    isOpen: expandedDone,
    close: closeExpandedDone,
    toggle: setExpandedDone,
  } = useDisclosure();

  const handleExpand = () => {
    if (expanded) {
      closeExpandedDone();
    }
    setExpanded();
  };

  const value = {
    expanded,
    expandedDone,
    handleExpand,
    popoverConfig,
    setExpanded,
    setExpandedDone,
  };

  return (
    <SideNavigationBarContext.Provider value={value}>
      {children}
    </SideNavigationBarContext.Provider>
  );
}
