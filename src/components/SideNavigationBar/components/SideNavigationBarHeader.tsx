import React, { useState } from "react";
const Logo_Expand = require("../../../assets/ikigai-logo-expand.png");
const Logo = require("../../../assets/ikigai-logo.png");
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
    <div className={`${styles.burgerWrapper} ${expanded ? styles.expanded : ""}`} onClick={onClick}>
      {children}
    </div>
  );
}

export function SideNavigationBarHeader({ title }: SideNavigationBarHeaderProps) {
  const { expanded, handleExpand, expandedDone } = useMenuBarConfiguration();
  const icon = expandedDone ? "sideNavCollapse" : "sideNavExpand";

  return (
    <div className={`${styles.sideNavigationBarHeader} ${!expanded ? styles.collapsed : ""}`}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={expanded ? Logo_Expand : Logo} alt="logo" />
        </div>
        {expanded && <span className={styles.title}>{title}</span>}
      </div>

      <BurgerWrapper expanded={expanded} onClick={handleExpand}>
        <Icon
          iconName={icon}
          isCustomIcon={true}
          iconSize={24}
          iconType={Icon.type.SVG}
          style={{ padding: "0.25rem", cursor: "pointer" }}
        />
      </BurgerWrapper>
    </div>
  );
}
