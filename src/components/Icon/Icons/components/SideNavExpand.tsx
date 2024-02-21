/* eslint-disable */
/* tslint:disable */
import * as React from "react";

export interface SideNavExpandIconProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}

export const SideNavExpandIcon: React.FC<SideNavExpandIconProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={size || "24"} height={size || "24"} {...props}>
    <path d="M10.8234 6.76268C11.5068 7.4461 11.5068 8.55413 10.8234 9.23755L8.25015 11.8108L8.25015 4.18945L10.8234 6.76268Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 2C1 1.44772 1.44772 1 2 1H14C14.5523 1 15 1.44772 15 2V14C15 14.5523 14.5523 15 14 15H2C1.44772 15 1 14.5523 1 14V2ZM2.5 13.5V2.5H4.25V13.5H2.5ZM5.75 13.5H13.5V2.5H5.75V13.5Z"
    />
  </svg>
);

SideNavExpandIcon.displayName = "SideNavExpandIcon";

/* tslint:enable */
/* eslint-enable */
