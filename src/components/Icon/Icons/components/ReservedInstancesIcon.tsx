/* eslint-disable */
/* tslint:disable */
import * as React from "react";

export interface ReservedInstancesIconProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}

export const ReservedInstancesIcon: React.FC<ReservedInstancesIconProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size || "24"} height={size || "24"} {...props}>
    <path d="M15.7,22.87a.87.87,0,0,1-.88-.87V20.22H12.9V22a.88.88,0,0,1-1.75,0V20.22H9.23V22a.88.88,0,0,1-1.75,0V20.22H6.42A2.62,2.62,0,0,1,3.8,17.6v-1H2a.88.88,0,1,1,0-1.75H3.8V12.89H2a.88.88,0,1,1,0-1.75H3.8V9.22H2A.88.88,0,1,1,2,7.47H3.8V6.41A2.62,2.62,0,0,1,6.42,3.79H7.48V2A.88.88,0,1,1,9.23,2V3.79h1.92V2A.88.88,0,1,1,12.9,2V3.79h1.92V2a.88.88,0,1,1,1.75,0V3.79h1a2.62,2.62,0,0,1,2.62,2.62v1H22a.88.88,0,1,1,0,1.75H20.23V11.1H22a.88.88,0,1,1,0,1.75H20.23v1.92H22a.88.88,0,1,1,0,1.75H20.23V17.6a2.63,2.63,0,0,1-2.62,2.62h-1V22A.87.87,0,0,1,15.7,22.87ZM6.42,5.54a.87.87,0,0,0-.87.87V17.6a.87.87,0,0,0,.87.87H17.61a.87.87,0,0,0,.87-.87V6.41a.87.87,0,0,0-.87-.87Z" />
    <path d="M14.68,15.38a.22.22,0,0,1-.17-.07.28.28,0,0,1-.07-.17V8.86a.24.24,0,0,1,.07-.17.22.22,0,0,1,.17-.07H16a.24.24,0,0,1,.25.24v6.28a.28.28,0,0,1-.07.17.24.24,0,0,1-.18.07ZM8,15.38a.21.21,0,0,1-.17-.07.23.23,0,0,1-.07-.17V8.86A.24.24,0,0,1,8,8.62h2.63a3,3,0,0,1,2,.58,2,2,0,0,1,.71,1.62A2,2,0,0,1,13,12a2,2,0,0,1-.86.72l1.32,2.37a.23.23,0,0,1,0,.11.19.19,0,0,1-.07.14.18.18,0,0,1-.14.06H12a.37.37,0,0,1-.27-.09.86.86,0,0,1-.13-.17L10.49,13h-1v2.15a.23.23,0,0,1-.07.17.24.24,0,0,1-.18.07Zm1.5-3.76h1.11a.93.93,0,0,0,.68-.22.81.81,0,0,0,.23-.6.89.89,0,0,0-.22-.61.94.94,0,0,0-.69-.23H9.51Z" />
  </svg>
);

ReservedInstancesIcon.displayName = "ReservedInstancesIcon";

/* tslint:enable */
/* eslint-enable */
