import cx from "classnames";
import React, { FC } from "react";
import Flex from "../../Flex/Flex";
import { noop as NOOP } from "lodash-es";
import styles from "./StepsDot.module.scss";
import VibeComponentProps from "../../../types/VibeComponentProps";

interface StepsDotProps extends VibeComponentProps {
  isActive?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  ariaLabel?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const StepsDot: FC<StepsDotProps> = ({
  isActive = false,
  isFirst = false,
  isLast = false,
  onClick = NOOP,
  ariaLabel,
  className
}) => {
  return (
    <Flex direction={Flex.directions.ROW}>
      {!isFirst &&
        <div
          className={styles.lineSeperator}
          style={isActive ? { borderColor: "var(--primary-color)" } : {}}
        />}
      <button
        type="button"
        aria-label={ariaLabel}
        className={cx(
          styles.dot,
          {
            [styles.isActive]: isActive
          },
          className
        )}
        onClick={onClick}
      />
      {!isLast && <div className={styles.lineSeperator} />}
    </Flex>
  );
};

export default StepsDot;