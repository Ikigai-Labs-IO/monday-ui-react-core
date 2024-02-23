import * as React from "react";
import { SideNavigationBarContext } from "./context";
import { useDisclosure } from "../../Panel/hooks/useDisclosure";

export function useMenuBarConfiguration() {
  const context = React.useContext(SideNavigationBarContext);

  if (context === undefined) {
    throw new Error("useMenuBarConfiguration must be used within a SideNavigationBarContextProvider");
  }
  return context;
}

export function useTooltipHover() {
  const { isOpen: isHovered, toggle: setIsHovered } = useDisclosure();
  const timerRef = React.useRef(-1);

  const updateIsHovered = (value: boolean, timeout: number) => {
    window.clearTimeout(timerRef.current);

    const timer = window.setTimeout(() => {
      setIsHovered(value);
    }, timeout);

    timerRef.current = timer;
  };

  React.useEffect(() => {
    return () => {
      window.clearTimeout(timerRef.current);
    };
  }, []);

  return {
    isHovered,
    updateIsHovered,
  };
}
