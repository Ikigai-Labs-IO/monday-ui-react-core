import React from "react";
import styles from "../SideNavigationBar.module.scss";
import { useMenuBarConfiguration } from "../utils/hooks";
import { CustomIcon } from "../../../components/Icon/Icons/components/CustomIcon";

export function SideNavigationBarFooter() {
  const { expanded } = useMenuBarConfiguration();

  return (
    <div className={styles.sideNavigationBarFooter}>
      <div className={styles.help} style={ expanded ? {} : {paddingBottom: "10px"}}>
        <CustomIcon iconSize="24" name="help" fillColor="var(--type-secondary)" viewBox="0 0 25 25"/>
        {expanded && "Get Help"}
      </div>
      <div className={styles.help} style={expanded ? {paddingTop: "14px"} : {paddingTop: "0"}}>
        <CustomIcon iconSize="24" name="refresh" fillColor="var(--type-secondary)" viewBox="0 0 25 25"/>
        {expanded && "Switch modes"}
      </div>
      <div className={styles.profile}>
        <span className={styles.avatar}>JA</span>
        {expanded && (
          <>
            <div className={styles.name}>
              <p className={styles.title}>James Acme</p>
              <p className={styles.subTitle}>james@brand.com</p>
            </div>
            <CustomIcon iconSize="30" name="threeDots" fillColor="var(--type-secondary)" viewBox="0 0 25 25"/>
          </>
        )
        }
      </div>
    </div>
  );
}
