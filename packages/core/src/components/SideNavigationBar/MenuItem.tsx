import * as React from "react";
import { Trigger } from "./components/Trigger";
import { MenuItemProps } from "./SideNavigationBarConstants";
import { useMenuBarConfiguration } from "./utils/hooks";
import "./SideNavigationBar.module.scss";
import Icon from "../../components/Icon/Icon";
import styles from "./MenuItem.module.scss";
import { CSSProperties } from "react";
import { ExtendedPopover } from "./ExtendedPopover";

interface FlexContainerProps {
  alignItems?: CSSProperties["alignItems"];
  alignContent?: CSSProperties["alignContent"];
  justifyContent?: CSSProperties["justifyContent"];
  wrap?: CSSProperties["flexWrap"];
  direction?: CSSProperties["flexDirection"];
  grow?: CSSProperties["flexGrow"];
  gap?: CSSProperties["gap"];
  columnGap?: CSSProperties["columnGap"];
  rowGap?: CSSProperties["rowGap"];
  className?: string;
  children?: React.ReactNode;
}

export const FlexContainer: React.FC<FlexContainerProps> = props => {
  const dynamicStyle: CSSProperties = {
    alignItems: props.alignItems ?? "center",
    alignContent: props.alignContent ?? "center",
    justifyContent: props.justifyContent ?? "flex-start",
    flexWrap: props.wrap ?? "nowrap",
    flexDirection: props.direction ?? "row",
    flexGrow: props.grow,
    gap: props.gap,
    columnGap: props.columnGap,
    rowGap: props.rowGap
  };

  return (
    <div className={styles.flexContainer} style={dynamicStyle}>
      {props.children}
    </div>
  );
};

interface StyledTriggerWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const StyledTriggerWrapper: React.FC<StyledTriggerWrapperProps> = ({ children, className }) => {
  return <div className={`styled-trigger-wrapper ${className || ""}`}>{children}</div>;
};

export function MenuItem({ caption, iconName, children, iconSize }: MenuItemProps) {
  const { expanded, expandedDone, popoverConfig } = useMenuBarConfiguration();

  if (children != null) {
    const triggerElement = (
      <FlexContainer justifyContent={expanded ? "start" : "center"}>
        <Trigger expanded={expandedDone} icon={iconName} caption={caption} />
      </FlexContainer>
    );

    return (
      <StyledTriggerWrapper>
        <ExtendedPopover trigger={triggerElement} margin={{ left: 20 }} content={children} {...popoverConfig} />
      </StyledTriggerWrapper>
    );
  }

  return (
    <StyledTriggerWrapper>
      <FlexContainer justifyContent={expanded ? "start" : "center"}>
        <Icon
          iconName={iconName}
          viewBox={iconSize ? `0 0 ${iconSize} ${iconSize}` : "0 0 19 19"}
          isCustomIcon
          iconSize={iconSize || "19"}
          style={expanded ? { marginRight: "0.75rem" } : {}}
        />
        {expanded ? caption : ""}
      </FlexContainer>
    </StyledTriggerWrapper>
  );
}
