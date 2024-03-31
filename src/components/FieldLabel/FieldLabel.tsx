import cx from "classnames";
import React, { FC, ForwardedRef, forwardRef } from "react";
import Icon from "../Icon/Icon";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./FieldLabel.module.scss";

interface FieldLabelProps extends VibeComponentProps {
  icon?: string | React.FunctionComponent | null;
  iconLabel?: string;
  labelText?: string;
  labelFor?: string;
  iconClassName?: string;
  labelClassName?: string;
  requiredAsterisk?: boolean;
  position?: "top" | "left";
}

const FieldLabel: FC<FieldLabelProps> = forwardRef(
  (
    {
      icon = "",
      iconLabel = "",
      labelText = "",
      labelFor = "",
      iconClassName = "",
      labelClassName = "",
      requiredAsterisk = false,
      position = "top"
    },
    ref: ForwardedRef<HTMLLabelElement>
  ) => {
    if (!labelText) {
      return null;
    }

    return (
      <section
        className={cx(styles.labelComponentWrapper, {
          [styles.leftLabel]: position === "left",
          [styles.topLabel]: position === "top"
        })}
      >
        <Icon
          icon={icon}
          className={cx(styles.labelComponentIcon, iconClassName)}
          id={labelFor}
          clickable={false}
          iconLabel={iconLabel}
          iconType={Icon.type.ICON_FONT}
        />
        <label
          htmlFor={labelFor}
          ref={ref}
          className={cx(styles.labelComponentText, labelClassName)}
          style={requiredAsterisk ? { display: "flex", flexDirection: "row" } : {}}
        >
          {labelText}
          {requiredAsterisk && <span className={styles.requiredAsterisk}> *</span>}{" "}
          {/* Render asterisk based on the prop */}
        </label>
      </section>
    );
  }
);

export default FieldLabel;
