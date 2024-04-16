import cx from "classnames";
import Text from "../Text/Text";
import React, { FC, ReactNode } from "react";
import { TextType } from "../Text/TextConstants";
import styles from "./SectionHeader.module.scss";
import { VibeComponentProps, withStaticProps } from "../../types";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { SectionHeaderType, SectionHeaderSizes } from "./SectionHeaderConstants";

export interface SectionHeaderProps extends VibeComponentProps {
  text: string;
  isNotFilled?: boolean;
  size?: SectionHeaderSizes;
  rightElement?: ReactNode;
  type?: SectionHeaderType;
}

export const SectionHeader: FC<SectionHeaderProps> & {
  sizes?: typeof SectionHeaderSizes;
  types?: typeof SectionHeaderType;
} = ({
  className,
  text,
  isNotFilled = false,
  rightElement,
  type = SectionHeaderType.FLUSH,
  size = SectionHeaderSizes.SMALL,
}) => {
    return (
      <div
        className={cx(
          className,
          styles.sectionHeader,
          isNotFilled ? styles.withBorder : styles.filled,
          getStyle(styles, type)
        )}
      >
        <Text className={cx(styles.text, getStyle(styles, size), getStyle(styles, type))} type={TextType.TEXT1}>
          {text}
        </Text>
        {rightElement}
      </div>
    );
  };

export default withStaticProps(SectionHeader, {
  sizes: SectionHeaderSizes,
  types: SectionHeaderType
});
