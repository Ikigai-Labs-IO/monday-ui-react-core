import React, { FC, ReactElement } from "react";
import cx from "classnames";
import Text from "../../Text/Text";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import styles from "./ModalContent.module.scss";

interface ModalContentProps extends VibeComponentProps {
  children: ReactElement | ReactElement[] | string;
}

const ModalContent: FC<ModalContentProps> = ({ className, id, "data-testid": dataTestId, children }) => {
  return (
    <Text
      type={Text.types.TEXT2}
      id={id}
      style={{ color: "#10181b" }}
      weight={Text.weights.MEDIUM}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_CONTENT, id)}
      className={cx(styles.container, className)}
      ellipsis={false}
    >
      {children}
    </Text>
  );
};

Object.assign(ModalContent, {
  displayName: "ModalContent"
});

export default ModalContent;
