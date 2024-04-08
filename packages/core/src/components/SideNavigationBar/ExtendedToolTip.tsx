import * as React from "react";
import * as ReactDOM from "react-dom";
import { useEvent } from "./utils/useEvent";
import { DEFAULT_MARGIN, Display, getStyle, Margin, Placement, Position } from "./utils/position";
import { useTooltipHover } from "./utils/hooks";
import styles from "./StyledTooltip.module.scss";

type Timeout = {
  showTimeout?: number;
  hideTimeout?: number;
};

export type ExtendedTooltipProps = Timeout & {
  caption: React.ReactNode;
  children: React.ReactNode;
  placement?: Placement;
  position?: Position;
  margin?: Margin;
  status?: Status;
  zIndex?: number;
  display?: Display;
};

export function ExtendedTooltip({
  caption,
  children,
  placement = "top",
  position = "center",
  status,
  showTimeout = 0,
  hideTimeout = 0,
  margin = DEFAULT_MARGIN,
  zIndex = 2000,
  display
}: ExtendedTooltipProps) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const tooltipRef = React.useRef<HTMLDivElement>(null);

  const { isHovered, updateIsHovered } = useTooltipHover();

  const [tooltipDimensions, setTooltipDimensions] = React.useState<DOMRect | null>(null);
  const [wrapperDimensions, setWrapperDimensions] = React.useState<DOMRect | null>(null);

  const handleScroll = React.useCallback(() => {
    updateIsHovered(false, 0);
  }, [updateIsHovered]);

  useEvent({ name: "scroll", handler: handleScroll });

  React.useEffect(() => {
    if (isHovered && tooltipRef.current instanceof HTMLDivElement && wrapperRef.current instanceof HTMLDivElement) {
      setTooltipDimensions(tooltipRef.current.getBoundingClientRect());
      setWrapperDimensions(wrapperRef.current.getBoundingClientRect());
    }
  }, [isHovered]);

  if (caption == null) {
    return <>{children}</>;
  }

  const style = {
    ...getStyle({
      wrapperDimensions,
      tooltipDimensions,
      placement,
      position,
      margin
    }),
    zIndex
  };

  return (
    <TooltipWrapper
      ref={wrapperRef}
      display={display}
      onPointerEnter={() => updateIsHovered(true, showTimeout)}
      onPointerLeave={() => updateIsHovered(false, hideTimeout)}
    >
      <Tooltip isHovered={isHovered} caption={caption} tooltipRef={tooltipRef} status={status} style={style} />
      {children}
    </TooltipWrapper>
  );
}

type TooltipProps = {
  caption: React.ReactNode;
  isHovered: boolean;
  tooltipRef: React.RefObject<HTMLDivElement>;
  style: { top?: number; left?: number; zIndex?: number };
  status?: Status;
};

function Tooltip({ caption, isHovered, tooltipRef, status, style }: TooltipProps): JSX.Element | null {
  const { zIndex = 2000 } = style;
  return isHovered
    ? (ReactDOM.createPortal(
      <StyledTooltip ref={tooltipRef} status={status} style={style} zIndex={zIndex}>
        {caption}
      </StyledTooltip>,
      document.body
    ))
    : null;
}

type Status = "accent" | "danger" | "notification" | "success" | "warning";

// Props for StyledTooltip component
interface StyledTooltipProps {
  status?: Status;
  zIndex?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const StyledTooltip = React.forwardRef<HTMLDivElement, StyledTooltipProps>(({ children, status, zIndex }, ref) => {
  const statusClass = status ? styles[status] : styles.default;
  const style = { zIndex };

  return (
    <div ref={ref} className={`${styles.tooltip} ${statusClass}`} style={style}>
      {children}
    </div>
  );
});

export interface TooltipWrapperProps {
  display?: Display;
  children?: React.ReactNode;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
}

const TooltipWrapper = React.forwardRef<HTMLDivElement, TooltipWrapperProps>(
  ({ children, display, onPointerEnter, onPointerLeave }, ref) => {
    const style = { display };

    return (
      <div
        className={styles.tooltipWrapper}
        ref={ref}
        style={style}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      >
        {children}
      </div>
    );
  }
);
