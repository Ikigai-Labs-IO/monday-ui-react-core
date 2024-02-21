import * as React from "react";
import { Props } from "./SideNavigationBarConstants";
import { useMenuBarConfiguration } from "./utils/hooks";
import { SideNavigationBarProvider } from "./utils/provider";
import styles from "./SideNavigationBar.module.scss";

export function SideNavigationBar(props: Props) {
  return (
    <SideNavigationBarProvider popoverConfig={props.popoverConfig}>
      <SideNavigationBarVisual {...props} />
    </SideNavigationBarProvider>
  );
}

interface ExpandableConfig {
  duration?: string;
  timingFunction?: string;
}

interface SideNavigationBarWrapperProps {
  expanded: boolean;
  position: "fixed" | "absolute" | "relative" | "static" | "sticky";
  backgroundColor: string;
  height?: string;
  expandableConfig?: ExpandableConfig;
  children?: React.ReactNode;
  onTransitionEnd?: () => void;
  onMouseLeave?: () => void;
}

export const SideNavigationBarWrapper: React.FC<SideNavigationBarWrapperProps> = ({
  expanded,
  position,
  backgroundColor,
  height,
  expandableConfig,
  children,
  onTransitionEnd,
  onMouseLeave
}) => {
  return (
    <nav
      className={`${styles.sideNavigationBarWrapper} ${expanded ? styles.expanded : ""}`}
      style={{ position }}
      data-duration={expandableConfig?.duration || ""}
      data-timing-function={expandableConfig?.timingFunction || ""}
      onTransitionEnd={onTransitionEnd}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </nav>
  );
};

function SideNavigationBarVisual({
  header,
  footer,
  position = "fixed",
  expandable = true,
  height = "100vh",
  backgroundColor = "#161632",
  closeOnLeave = false,
  expandableConfig = {
    timingFunction: "linear",
    duration: "0.2s"
  },
  children
}: Props) {
  const { expanded, expandedDone, handleExpand, setExpanded, setExpandedDone } = useMenuBarConfiguration();

  if (children == null) {
    console.warn("Children is not provided. Component will not be rendered.");
    return null;
  }

  const icon = expandedDone ? "sideNavCollapse" : "sideNavExpand";

  return (
    <SideNavigationBarWrapper
      expanded={expanded}
      onTransitionEnd={() => setExpandedDone(expanded)}
      onMouseLeave={() => {
        if (closeOnLeave) {
          setExpanded(false);
          setExpandedDone(false);
        }
      }}
      position={position as "fixed" | "absolute" | "relative" | "static" | "sticky"}
      backgroundColor={backgroundColor}
      height={height}
      expandableConfig={expandableConfig}
    >
      {header}
      {children}
      {footer}
    </SideNavigationBarWrapper>
  );
}
