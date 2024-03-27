import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useRealShape from "../Helper/useRealShape";

export type ExpandProps = {
  isExpanded?: boolean;
  delay?: number;
};

const defaultProps = {
  isExpanded: false,
  delay: 200,
};

const Container = styled.div<{
  visible: boolean;
  height: string;
  delay: number;
}>`
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition: height ${(props) => props.delay}ms ease;
  &.expanded {
    height: ${(props) => props.height};
    visibility: visible;
  }
`;

const Expand: React.FC<React.PropsWithChildren<ExpandProps>> = ({
  isExpanded = false,
  delay = 200,
  children,
}: React.PropsWithChildren<ExpandProps>) => {
  const [height, setHeight] = useState<string>(isExpanded ? "auto" : "0");
  const [selfExpanded, setSelfExpanded] = useState<boolean>(isExpanded);
  const [visible, setVisible] = useState<boolean>(isExpanded);
  const contentRef = useRef<HTMLDivElement>(null);
  const entryTimer = useRef<number>();
  const leaveTimer = useRef<number>();
  const resetTimer = useRef<number>();
  const [state, updateShape] = useRealShape<HTMLDivElement>(contentRef);

  useEffect(() => setHeight(`${state.height}px`), [state.height]);
  useEffect(() => {
    if (isExpanded) {
      setVisible(isExpanded);
    } else {
      updateShape();
      setHeight(`${state.height}px`);
    }

    entryTimer.current = window.setTimeout(() => {
      setSelfExpanded(isExpanded);
      clearTimeout(entryTimer.current);
    }, 30);

    if (isExpanded) {
      resetTimer.current = window.setTimeout(() => {
        setHeight("auto");
        clearTimeout(resetTimer.current);
      }, delay);
    } else {
      leaveTimer.current = window.setTimeout(() => {
        setVisible(isExpanded);
        clearTimeout(leaveTimer.current);
      }, delay / 2);
    }

    return () => {
      clearTimeout(entryTimer.current);
      clearTimeout(leaveTimer.current);
      clearTimeout(resetTimer.current);
    };
  }, [isExpanded]);

  return (
    <Container
      visible={visible}
      height={height}
      delay={delay}
      className={selfExpanded ? "expanded" : ""}
    >
      <div ref={contentRef}>{children}</div>
    </Container>
  );
};

Expand.defaultProps = defaultProps;
Expand.displayName = "Expand";

export default Expand;
