/* eslint-disable */
/* tslint:disable */
import React from "react";
import { useMenuBarConfiguration } from "../utils/hooks";
import styles from "../SideNavigationBar.module.scss";
import Icon from "../../../components/Icon/Icon";

interface SideNavigationBarHeaderProps {
  title: string;
}

interface BurgerWrapperProps {
  expanded: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}

export function BurgerWrapper({ expanded, onClick, children }: BurgerWrapperProps) {
  return (
    <div
      className={`${styles.burgerWrapper} ${expanded ? styles.expanded : ""}`}
      onClick={onClick}
      onKeyDown={event => {
        if (event.key === "Enter") {
          onClick();
        }
      }}
    >
      {children}
    </div>
  );
}

export function SideNavigationBarHeader({ title }: SideNavigationBarHeaderProps) {
  const Logo = require("../../../assets/ikigai-logo.png");
  const Logo_Expand = require("../../../assets/ikigai-logo-expand.png");
  const { expanded, handleExpand } = useMenuBarConfiguration();
  const icon = expanded ? "sideNavExpand" : "sideNavCollapse";

  return (
    <div className={`${styles.sideNavigationBarHeader} ${!expanded ? styles.collapsed : ""}`}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={expanded ? Logo_Expand : Logo} alt="logo" />
          {expanded && <span className={styles.title}>{title}</span>}
        </div>
      </div>

      <BurgerWrapper expanded={expanded} onClick={handleExpand}>
        <Icon
          iconName={icon}
          isCustomIcon
          viewBox="0 0 15 15" 
          iconSize="15"
          iconType={Icon.type.SVG}
          style={{ padding: "0.25rem", cursor: "pointer" }}
        />
      </BurgerWrapper>
    </div>
  );
}
/* tslint:enable */
/* eslint-enable */
