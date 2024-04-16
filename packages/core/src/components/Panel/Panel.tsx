import * as React from "react";
import Button from "../Button/Button";
import Text from "../Text/Text";
import styles from "./Panel.module.scss";
import Icon from "../../components/Icon/Icon";
import Close from "../../components/Icon/Icons/components/Close";
import { PANEL_SIZES, PanelSize, sizeToWidth } from "./PanelConstants";

type HeaderProps = {
  side?: string;
  title?: string;
  onClick?: any;
};

export function PanelHeader({ side = "onRight", title, onClick }: HeaderProps) {
  const reverse = side === "onLeft";
  return (
    <div className={styles.panelHeaderStyled}>
      <div
        className={styles.panelHeaderInner}
        style={{
          justifyContent: reverse ? "flex-end" : "space-between",
          flexDirection: reverse ? "row-reverse" : "row"
        }}
      >
        <header>
          <Text type={Text.types.TEXT2} element="span" weight={Text.weights.NORMAL}>
            <div className={styles.headerTextStyled} style={{ marginLeft: reverse ? "1rem" : "0" }}>
              {title}
            </div>
          </Text>
        </header>
        <Icon iconType={Icon.type.SVG} onClick={onClick} clickable={true} icon={Close} iconSize="15px" />
      </div>
    </div>
  );
}

type PanelFooterProps = {
  close?: any;
};

export function PanelFooter({ close }: PanelFooterProps) {
  return (
    <div className={styles.panelFooterStyled}>
      <Button onClick={close} kind={Button.kinds.SECONDARY}>
        Label
      </Button>
      <Button>Label</Button>
    </div>
  );
}

type PanelProps = {
  children?: React.ReactNode;
  caption?: string;
  isOpen?: boolean;
  side?: "onLeft" | "onRight";
  size?: PanelSize;
  reverse?: boolean;
  onClick?: () => void;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  headerStyles?: React.CSSProperties;
  contentStyles?: React.CSSProperties;
};

export function Panel({
  children,
  side,
  isOpen,
  footer,
  header,
  contentStyles,
  size = PANEL_SIZES.MEDIUM,
  onClick = () => undefined,
  ...props
}: PanelProps) {
  React.useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClick();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClick]);

  const reverse = side === "onLeft";
  const width = sizeToWidth[size];
  return (
    <>
      <div
        className={styles.backgroundStyled}
        style={{ pointerEvents: isOpen ? "auto" : "none", opacity: isOpen ? 0.7 : 0 }}
      />
      <div
        className={isOpen ? styles.panelMenuStyled : ""}
        style={{
          transform: isOpen ? "translate3d(0,0,0)" : `translate3d(${reverse ? "-100%,0,0" : "100%,0,0"})`,
          justifyContent: side !== "onLeft" ? "flex-end" : "flex-start"
        }}
      >
        <div
          className={styles.innerStyled}
          style={{
            borderLeft: side !== "onLeft" && "1px solid var(--ui-border-color)",
            borderRight: reverse && "1px solid var(--ui-border-color)",
            width: isOpen ? width : "0"
          }}
        >
          {isOpen && (
            <>
              {header}
              <div className={styles.containerStyled} style={contentStyles}>
                <Text className={styles.textStyled} type={Text.types.TEXT2} element="div" weight={Text.weights.NORMAL}>
                  {children}
                </Text>
              </div>
              {footer}
            </>
          )}
        </div>
        {isOpen && (
          <div
            className={styles.CloseLayerStyled}
            onClick={onClick}
            onKeyDown={event => {
              if (event.key === "Enter") {
                onClick();
              }
            }}
            {...props}
          />
        )}
      </div>
    </>
  );
}
