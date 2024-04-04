/* eslint-disable */
/* tslint:disable */
import * as React from "react";

export interface BurgerMenuProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size || "24"} height={size || "24"} {...props}>
    <path d="m20,19.87H4c-.48,0-.88-.39-.88-.88s.39-.88.88-.88h16c.48,0,.88.39.88.88s-.39.88-.88.88Z" />
    <path d="m20,12.87H4c-.48,0-.88-.39-.88-.88s.39-.88.88-.88h16c.48,0,.88.39.88.88s-.39.88-.88.88Z" />
    <path d="m20,5.87H4c-.48,0-.88-.39-.88-.88s.39-.88.88-.88h16c.48,0,.88.39.88.88s-.39.88-.88.88Z" />
  </svg>
);

BurgerMenu.displayName = "BurgerMenuIcon";

/* tslint:enable */
/* eslint-enable */
