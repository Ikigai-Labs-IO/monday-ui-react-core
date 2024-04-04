import * as React from "react";
import { MenuItemProps } from "../SideNavigationBarConstants";
import "../SideNavigationBar.module.scss";
import Icon from "../../Icon/Icon";
import { PathName } from "../../Icon/Icons/components/CustomIcon";

type Props = {
  caption: string;
  icon: PathName;
  expanded: boolean;
};

interface StyledPopoverTriggerProps {
  children: React.ReactNode;
}

export const StyledPopoverTrigger: React.FC<StyledPopoverTriggerProps> = ({ children }) => {
  return <div className="styled-popover-trigger">{children}</div>;
};

export function Trigger({ expanded, icon, caption }: Props) {
  return expanded ? (
    <StyledPopoverTrigger>
      <TriggerIcon iconName={icon} />
      {caption}
    </StyledPopoverTrigger>
  ) : (
    <TriggerIcon iconName={icon} />
  );
}

function TriggerIcon({ iconName }: Pick<MenuItemProps, "iconName">) {
  return <Icon iconSize={24} iconType={Icon.type.SVG} isCustomIcon iconName={iconName} />;
}
