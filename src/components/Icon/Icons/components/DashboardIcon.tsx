/* eslint-disable */
/* tslint:disable */
import * as React from "react";

export interface DashboardIconProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}

export const DashboardIcon: React.FC<DashboardIconProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size || "24"} height={size || "24"} {...props}>
    <path d="M20,22.58H16.27a2.93,2.93,0,0,1-2.92-2.93V16a2.93,2.93,0,0,1,2.92-2.93H20A2.93,2.93,0,0,1,22.88,16v3.67A2.94,2.94,0,0,1,20,22.58ZM16.27,14.8A1.18,1.18,0,0,0,15.1,16v3.67a1.18,1.18,0,0,0,1.17,1.18H20a1.18,1.18,0,0,0,1.18-1.18V16A1.18,1.18,0,0,0,20,14.8Z" />
    <path d="M7.73,22.58H4.05a2.93,2.93,0,0,1-2.92-2.93V16a2.93,2.93,0,0,1,2.92-2.93H7.73A2.93,2.93,0,0,1,10.65,16v3.67A2.93,2.93,0,0,1,7.73,22.58ZM4.05,14.8A1.17,1.17,0,0,0,2.88,16v3.67a1.17,1.17,0,0,0,1.17,1.18H7.73A1.18,1.18,0,0,0,8.9,19.65V16A1.18,1.18,0,0,0,7.73,14.8Z" />
    <path d="M19.94,11H4.05A2.93,2.93,0,0,1,1.13,8V4.35A2.93,2.93,0,0,1,4.05,1.42H19.94a2.94,2.94,0,0,1,2.93,2.93V8A2.93,2.93,0,0,1,19.94,11ZM4.05,3.17A1.17,1.17,0,0,0,2.88,4.35V8A1.17,1.17,0,0,0,4.05,9.2H19.94A1.18,1.18,0,0,0,21.12,8V4.35a1.18,1.18,0,0,0-1.18-1.18Z" />
  </svg>
);

DashboardIcon.displayName = "DashboardIcon";

/* tslint:enable */
/* eslint-enable */
