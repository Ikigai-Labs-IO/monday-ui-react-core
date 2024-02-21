import * as React from "react";
import { MenuItemProps } from "../SideNavigationBarConstants";
import "../SideNavigationBar.module.scss";
import Icon from "../../Icon/Icon";

type Props = {
  caption: string;
  icon: string;
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
      <TriggerIcon icon={icon} />
      {caption}
    </StyledPopoverTrigger>
  ) : (
    <TriggerIcon icon={icon} />
  );
}

function TriggerIcon({ icon }: Pick<MenuItemProps, "icon">) {
  return <Icon iconSize={24} iconType={Icon.type.SVG} icon={icon} />;
}
