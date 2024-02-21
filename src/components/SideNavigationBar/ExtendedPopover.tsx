import * as React from "react";
import { HTMLAttributes } from 'react';
import { useDisclosure } from "./utils/hooks";
import { useEvent } from "./utils/useEvent";
import { Placement, Position, getStyle, Margin, DEFAULT_MARGIN, PaddingWrapper } from "./utils/position";
import { throttle } from "./utils/throttle";
import Icon from "../Icon/Icon";
import styles from "./ExtendedPopOver.module.scss";
import { BurgerMenu } from "../Icon/Icons/components/BurgerMenu";
import Button from "../Button/Button";

type Props = {
  content: React.ReactNode;
  trigger?: React.ReactNode;
  placement?: Placement;
  position?: Position;
  margin?: Margin;
  clickOutsideToClose?: boolean;
  triggerOn?: ExtendedPopoverAction;
  closeOn?: ExtendedPopoverAction;
};

export function ExtendedPopover({
  trigger = (
    <Button size="sm">
      <Icon iconSize={24} iconType={Icon.type.SVG} icon={BurgerMenu} />
    </Button>
  ),
  content,
  placement = "right",
  position = "start",
  clickOutsideToClose = true,
  margin = DEFAULT_MARGIN,
  triggerOn = "click",
  closeOn = "click"
}: Props) {
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const { isOpen, close, open, toggle } = useDisclosure();
  const [contentDimensions, setContentDimensions] = React.useState<DOMRect | null>(null);
  const [triggerDimensions, setTriggerDimensions] = React.useState<DOMRect | null>(null);

  React.useEffect(() => {
    if (isOpen && contentRef.current instanceof HTMLDivElement && triggerRef.current instanceof HTMLDivElement) {
      setTriggerDimensions(triggerRef.current.getBoundingClientRect());
      setContentDimensions(contentRef.current.getBoundingClientRect());
    }
  }, [isOpen]);

  const handleClickOutside = React.useCallback(
    (event: Event) => {
      if (
        clickOutsideToClose &&
        contentRef.current &&
        triggerRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        close();
      }
    },
    [contentRef, triggerRef, clickOutsideToClose]
  );

  useEvent({ name: "click", handler: handleClickOutside, target: document });

  const handleScroll = throttle(
    React.useCallback(() => {
      close();
    }, [])
  );

  useEvent({ name: "scroll", handler: handleScroll });

  if (content == null) {
    return null;
  }

  const triggerProps = {
    ...(triggerOn === "click"
      ? {
          onClick: () => toggle()
        }
      : {
          onMouseEnter: () => open(),
          onMouseLeave: () => {
            if (closeOn === "hover") {
              close();
            }
          }
        })
  };

  const style = getStyle({
    wrapperDimensions: triggerDimensions,
    tooltipDimensions: contentDimensions,
    placement,
    position
  });

  return (
    <TriggerWrapper ref={triggerRef} {...triggerProps}>
      {trigger}
      <Popover
        content={content}
        contentRef={contentRef}
        visible={isOpen}
        style={style}
        margin={margin}
        placement={placement}
      />
    </TriggerWrapper>
  );
}

interface PopoverProps {
  contentRef: React.RefObject<HTMLDivElement>;
  visible: boolean;
  style?: React.CSSProperties;
  margin?: any; 
  content: React.ReactNode;
  placement?: string; 
}

const Popover: React.FC<PopoverProps> = ({ contentRef, visible, style, margin, content, placement }) => {
  if (!visible) return null;

  return (
    <ContentWrapper ref={contentRef} style={style}>
      {content}
    </ContentWrapper>
  );
};

interface TriggerWrapperProps {
  children: React.ReactNode;
}

const TriggerWrapper = React.forwardRef<HTMLDivElement, TriggerWrapperProps>((props, ref) => {
  return <div className={styles.triggerWrapper} ref={ref} {...props} />;
});

interface ContentWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const ContentWrapper = React.forwardRef<HTMLDivElement, ContentWrapperProps>((props, ref) => {
  return <div className={styles.contentWrapper} ref={ref} {...props} />;
});


export type ExtendedPopoverAction = "click" | "hover";
