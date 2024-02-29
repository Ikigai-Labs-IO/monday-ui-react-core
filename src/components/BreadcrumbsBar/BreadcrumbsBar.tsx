import cx from "classnames";
import React, { FC, ReactElement } from "react";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import NavigationChevronRight from "../Icon/Icons/components/NavigationChevronRight";
import { BreadcrumbsBarType } from "./BreadcrumbsConstants";
import { BreadcrumbItemProps } from "./BreadcrumbItem/BreadcrumbItem";
import { withStaticProps, VibeComponentProps } from "../../types";
import styles from "./BreadcrumbsBar.module.scss";
import { CustomIcon } from "../Icon/Icons";

export interface BreadcrumbBarProps extends VibeComponentProps {
  /** The type of the bar is responsible for whether it will be navigational or for indication only  */
  type: BreadcrumbsBarType;
  children: ReactElement<BreadcrumbItemProps> | ReactElement<BreadcrumbItemProps>[];
}

const BreadcrumbsBar: FC<BreadcrumbBarProps> & { types?: typeof BreadcrumbsBarType } = ({
  className,
  children,
  type = BreadcrumbsBar.types.INDICATION,
  id,
  "data-testid": dataTestId
}) => (
  <nav
    aria-label="Breadcrumb"
    className={cx(styles.breadcrumbsBar, className)}
    id={id}
    data-testid={dataTestId || getTestId(ComponentDefaultTestId.BREADCRUMBS_BAR, id)}
  >
    <ol>
      {children &&
        React.Children.map(children, (child, index) =>
          React.isValidElement(child)
            ? [
                index > 0 && <CustomIcon className={styles.separatorIcon} iconSize="30" name="navigationForwardSlash" />,
                React.cloneElement(child, {
                  ...child?.props,
                  isClickable: type !== BreadcrumbsBar.types.INDICATION && !(index === React.Children.count(children) - 1)
                })
              ]
            : null
        )}
    </ol>
  </nav>
);

export default withStaticProps(BreadcrumbsBar, {
  types: BreadcrumbsBarType
});
