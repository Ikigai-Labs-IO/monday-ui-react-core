import React from "react";
import styles from "../SideNavigationBar.module.scss";
import { useMenuBarConfiguration } from "../utils/hooks";
import Icon from "../../Icon/Icon";
import { IoHelpCircle } from "../../../components/Icon/Icons/components/IoHelpCircle";

export function SideNavigationBarFooter() {
  const { expanded } = useMenuBarConfiguration();

  return (
    <div className={styles.sideNavigationBarFooter}>
      <div className={styles.help}>
        <Icon iconSize="24" iconType={Icon.type.SVG} icon={IoHelpCircle} />
        {expanded && "Help"}
      </div>
      <div className={styles.profile}>
        <span className={styles.avatar}>JA</span>
        {expanded && <span className={styles.name}>James Acme</span>}
      </div>
    </div>
  );
}
