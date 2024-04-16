import ToggleText from "./ToggleText";
import cx from "classnames";
import React, { FC } from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./MockToggle.module.scss";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { camelCase } from "lodash-es";
import { ToggleColor } from "./ToggleConstants";

export interface MockToggleProps extends VibeComponentProps {
  areLabelsHidden?: boolean;
  checked?: boolean;
  offOverrideText?: string;
  onOverrideText?: string;
  selectedClassName?: string;
  disabled: boolean;
  toggleColor?: ToggleColor;
}

export const MockToggle: FC<MockToggleProps> = ({
  areLabelsHidden,
  checked,
  offOverrideText,
  onOverrideText,
  className,
  selectedClassName,
  disabled,
  toggleColor = null
}) => {
  const colorStyle = toggleColor ? getStyle(styles, camelCase("color" + toggleColor)) : null;

  return (
    <>
      {areLabelsHidden ? null : <ToggleText disabled={disabled}>{offOverrideText}</ToggleText>}
      <div
        className={cx(
          styles.toggle,
          className,
          {
            [cx(styles.selected, selectedClassName)]: checked,
            [styles.notSelected]: !checked,
            [styles.disabled]: disabled
          },
          colorStyle
        )}
        aria-hidden="true"
        data-testid={getTestId(ComponentDefaultTestId.TOGGLE)}
      />
      {areLabelsHidden ? null : <ToggleText disabled={disabled}>{onOverrideText}</ToggleText>}
    </>
  );
};
