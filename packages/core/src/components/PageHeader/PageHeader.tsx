import Flex from "../Flex/Flex";
import Text from "../Text/Text";
import Heading from "../Heading/Heading";
import { CustomIcon } from "../Icon/Icons";
import styles from "./PageHeader.module.scss";
import { withStaticProps } from "../../types";
import VibeComponent from "../../types/VibeComponent";
import BreadcrumbsBar from "../BreadcrumbsBar/BreadcrumbsBar";
import EditableHeading from "../EditableHeading/EditableHeading";
import React, { forwardRef, ReactNode, ReactElement } from "react";
import { HeadingType, HeadingWeight } from "../Heading/HeadingConstants";
import { TypographyAlign, TypographyColor } from "../Typography/TypographyConstants";
import { BreadcrumbItemProps } from "../BreadcrumbsBar/BreadcrumbItem/BreadcrumbItem";

export interface PageHeaderProps {
  type?: HeadingType;
  weight?: HeadingWeight;
  align?: TypographyAlign;
  color?: TypographyColor;
  children?: ReactNode;
  text: string;
  isDescription?: boolean;
  description?: string;
  isBreadcrumb?: boolean;
  BreadcrumbsItems?: ReactElement<BreadcrumbItemProps>[];
}

export const PageHeader: VibeComponent<PageHeaderProps, HTMLElement> & {
  types?: typeof HeadingType;
  weights?: typeof HeadingWeight;
  colors?: typeof TypographyColor;
  align?: typeof TypographyAlign;
} = forwardRef(
  (
    {
      type = HeadingType.H1,
      weight = HeadingWeight.BOLD,
      isDescription = false,
      description = "",
      text = "",
      isBreadcrumb = false,
      BreadcrumbsItems = []
    },
    ref
  ) => {
    return (
      <Flex
        align={Flex.align.START}
        gap={Flex.gaps.XS}
        aria-labelledby="my-work-id"
        direction={Flex.directions.COLUMN}
      >
        {isBreadcrumb && (
          <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>
            {BreadcrumbsItems}
          </BreadcrumbsBar>
        )}
        <EditableHeading
          type={type}
          weight={weight}
          value={text}
          className={styles.editableHeading}
        />
        {isDescription &&
          <Flex direction={Flex.directions.ROW} align={Flex.align.CENTER} gap={Flex.gaps.SMALL}>
            <Text type={Text.types.TEXT2} color={Text.colors.SECONDARY}>
              {description}
            </Text>
            <CustomIcon name="info" viewBox="0 -2 27 30" iconSize={19} fillColor="var(--type-secondary)" />
          </Flex>
        }
      </Flex>
    );
  }
);

export default withStaticProps(Heading, {
  types: HeadingType,
  weights: HeadingWeight,
  align: TypographyAlign,
  colors: TypographyColor,
});
