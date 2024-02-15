import * as React from "react";
import Button from "../Button/Button";
import Text from "../Text/Text";
import styles from "./Panel.module.scss";
import Icon from "../../components/Icon/Icon";
import Close from "../../components/Icon/Icons/components/Close";

type HeaderProps = {
  side?: string;
  title?: string;
  onClick?: any;
};

export function PanelHeader({ side = "onRight", title, onClick }: HeaderProps) {
  const reverse = side === "onLeft";
  return (
    <div className={styles.panelHeaderStyled}>
      <div className={styles.panelHeaderInner} style={{justifyContent: reverse ? 'flex-end' : 'space-between', flexDirection: reverse ? 'row-reverse' : 'row'}}>
        <header>
          <Text type={Text.types.TEXT2} element="span" weight={Text.weights.NORMAL}>
            <div style={{marginLeft: reverse ? "1rem" : "0", fontWeight: "500", textTransform: "capitalize"}}>
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
      <Button onClick={close}>Cancel</Button>
      <Button>Update</Button>
    </div>
  );
}

type PanelProps = {
  children?: React.ReactNode;
  title?: string;
  caption?: string;
  isOpen?: boolean;
  side?: "onLeft" | "onRight";
  width?: number | string;
  reverse?: boolean;
  onClick?: () => void;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  headerStyles?: React.CSSProperties;
  contentStyles?: React.CSSProperties;
};

export function Panel({
  children,
  title,
  caption,
  side,
  isOpen,
  footer,
  header,
  headerStyles,
  contentStyles,
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
  return (
    <>
      <div className={styles.backgroundStyled} style={{pointerEvents: isOpen ? "auto" : "none", opacity: isOpen ? 0.7 : 0}}/>
      <div className={isOpen ? styles.panelMenuStyled : ""}
        style={{transform: isOpen ? "translate3d(0,0,0)" : `translate3d(${reverse ? "-100%,0,0" : "100%,0,0"})`,
        justifyContent: side !== "onLeft" ? "flex-end" : "flex-start"}}
      >
        <div className={styles.innerStyled} style={{
          borderLeft: side !== "onLeft" && "1px solid #C8C8C8", borderRight: reverse && "1px slid #C8C8C8"}}>
          {isOpen && (
            <>
              {header}
              <div className={styles.containerStyled} style={contentStyles}>
                <Text className={styles.textStyled} type={Text.types.TEXT2} element="div" weight={Text.weights.NORMAL}>{children}</Text>
              </div>
              {footer}
            </>
          )}
        </div>
        {isOpen && <div className={styles.CloseLayerStyled} onClick={onClick} {...props} />}
      </div>
    </>
  );
}
