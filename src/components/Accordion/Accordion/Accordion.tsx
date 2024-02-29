import cx from "classnames";
import React, { forwardRef, ReactElement, useCallback, useMemo, useRef, useState } from "react";
import useMergeRef from "../../../hooks/useMergeRef";
import { VibeComponent, VibeComponentProps } from "../../../types";
import styles from "./Accordion.module.scss";

const COMPONENT_ID = "monday-accordion";

function defineChildId(index: number, props: { id: string }, accordionId: string) {
  if (props.id) {
    return props.id;
  }
  if (accordionId) {
    return `${accordionId}--item-${index}`;
  }
  return `${COMPONENT_ID}--item-${index}`;
}

interface AccordionProps extends VibeComponentProps {
  /**
   * List of AccordionItems
   */
  children?: Array<ReactElement> | ReactElement;
  /**
   * is allowed multiple opened accordion items
   */
  allowMultiple?: boolean;
  /**
   * Unique TestId - can be used as Selector for integration tests and other needs (tracking, etc.)
   */
  "data-testid"?: string;
  /**
   * Array of initial expanded indexes
   */
  defaultIndex?: Array<number>;

  disabled?: boolean;
}

const Accordion: VibeComponent<AccordionProps, unknown> & object = forwardRef(
  (
    {
      children: originalChildren = null,
      allowMultiple = false,
      "data-testid": dataTestId = COMPONENT_ID,
      defaultIndex = [],
      className = "",
      disabled = false,
      id
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    const [expandedItems, setExpandedItems] = useState(defaultIndex);

    const children = useMemo(() => React.Children.toArray(originalChildren), [originalChildren]);

    const isChildExpanded = useCallback(
      (itemIndex: number) => {
        return expandedItems.includes(itemIndex);
      },
      [expandedItems]
    );

    const onChildClick = useCallback(
      (itemIndex: number) => {
        if (allowMultiple) {
          if (disabled) return;
          const newExpandedItems = [...expandedItems];
          if (isChildExpanded(itemIndex)) {
            const index = newExpandedItems.indexOf(itemIndex);
            if (index > -1) {
              newExpandedItems.splice(index, 1);
            }
          } else {
            newExpandedItems.push(itemIndex);
          }
          setExpandedItems(newExpandedItems);
          return;
        }

        if (isChildExpanded(itemIndex)) {
          setExpandedItems([]);
        } else {
          setExpandedItems([itemIndex]);
        }
      },
      [isChildExpanded, expandedItems, allowMultiple, disabled]
    );

    const renderChildElements = useMemo(() => {
      return React.Children.map(children, (child: ReactElement, itemIndex) => {
        const originalProps = { ...child?.props };
        const childId = defineChildId(itemIndex, originalProps, id);
        return React.cloneElement(child, {
          ...originalProps,
          id: childId,
          onClickAccordionCallback: () => {
            onChildClick(itemIndex);
          },
          open: !disabled && isChildExpanded(itemIndex),
          expandCollapseComponentClassName: cx(styles.accordionItemExpandCollapse, {
            [styles.accordionItemExpandCollapseLast]: itemIndex === children.length - 1,
            [styles.disabledAccordion]: disabled,
          })
        });
      });
    }, [children, id, disabled, isChildExpanded, onChildClick]);

    return (
      <div ref={mergedRef} className={cx(styles.accordion, className, { [styles.disabledAccordion]: disabled })} data-testid={dataTestId} id={id} style={disabled ? { pointerEvents: "none" } : undefined}>
        {children && renderChildElements}
      </div>
    );
  }
);

export default Accordion;
