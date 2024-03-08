import { camelCase } from "lodash-es";
import cx from "classnames";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import Text from "../Text/Text";
import Leg from "./Leg";
import { LabelColor, LabelKind, LabelSize, BorderRadius } from "./LabelConstants";
import { VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import useClickableProps from "../../hooks/useClickableProps/useClickableProps";
import useMergeRef from "../../hooks/useMergeRef";
import styles from "./Label.module.scss";

interface LabelProps extends VibeComponentProps {
  /**
   * @deprecated - use className instead
   */
  wrapperClassName?: string;
  /**
   * Class name for an inner text wrapper
   */
  labelClassName?: string;
  kind?: LabelKind;
  color?: LabelColor;
  text?: string;
  isAnimationDisabled?: boolean;
  isLegIncluded?: boolean;
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  size?: LabelSize;
  isCornersRounded?: boolean;
}

const Label: VibeComponent<LabelProps> & {
  colors?: typeof LabelColor;
  kinds?: typeof LabelKind;
  size?: typeof LabelSize;
} = forwardRef<HTMLElement, LabelProps>(
  (
    {
      className,
      wrapperClassName,
      labelClassName,
      kind = LabelKind.FILL,
      color = LabelColor.PRIMARY,
      text = "",
      isAnimationDisabled = false,
      isLegIncluded = false,
      size = LabelSize.MEDIUM,
      isCornersRounded = false,
      id,
      "data-testid": dataTestId,
      onClick
    },
    ref
  ) => {
    const labelRef = useRef<HTMLSpanElement>(null);
    const mergedRef = useMergeRef(ref, labelRef);

    const overrideClassName = backwardCompatibilityForProperties([className, wrapperClassName]) as string;
    const isClickable = Boolean(onClick);

    const classNames = useMemo(
      () =>
        cx(
          styles.label,
          getStyle(styles, camelCase("kind" + "-" + kind)),
          getStyle(styles, camelCase("color" + "-" + color)),
          getStyle(styles, camelCase("size" + "-" + size)),
          getStyle(
            styles,
            camelCase("borderRadius" + "-" + (isCornersRounded ? BorderRadius.PX1000 : BorderRadius.PX4))
          ),
          {
            [styles.withAnimation]: !isAnimationDisabled,
            [styles.withLeg]: isLegIncluded
          },
          labelClassName
        ),
      [kind, color, size, isCornersRounded, isAnimationDisabled, isLegIncluded, labelClassName]
    );

    const onClickCallback = useCallback(
      (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        if (onClick) {
          event.preventDefault();
          onClick(event);
        }
      },
      [onClick]
    );

    const clickableProps = useClickableProps(
      {
        onClick: onClickCallback,
        id,
        ariaHidden: false,
        ariaHasPopup: false,
        ariaExpanded: false
      },
      labelRef
    );

    return (
      <span
        {...(isClickable && clickableProps)}
        className={cx({ [styles.clickable]: isClickable }, overrideClassName)}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.LABEL, id)}
        ref={mergedRef}
      >
        <Text element="span" type={Text.types.TEXT2} className={classNames} color={Text.colors.ON_INVERTED}>
          <Text element="span" type={Text.types.TEXT2} color={Text.colors.INHERIT}>
            {text}
          </Text>
          <span className={cx(styles.legWrapper)}>{isLegIncluded ? <Leg /> : null}</span>
        </Text>
      </span>
    );
  }
);

export default withStaticProps(Label, {
  colors: LabelColor,
  kinds: LabelKind,
  size: LabelSize
});
