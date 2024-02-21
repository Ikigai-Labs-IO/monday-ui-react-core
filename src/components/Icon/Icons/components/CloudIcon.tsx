/* eslint-disable */
/* tslint:disable */
import * as React from "react";

export interface CloudIconProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}

export const CloudIcon: React.FC<CloudIconProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size || "24"} height={size || "24"} {...props}>
    <path d="M17.32,20.07H6.68A5.57,5.57,0,0,1,5,9.21.32.32,0,0,0,5.17,9,7.18,7.18,0,0,1,12,3.93h0a7.4,7.4,0,0,1,1.33.13A7.12,7.12,0,0,1,18.83,9a.32.32,0,0,0,.21.21,5.57,5.57,0,0,1-1.72,10.86ZM12,5.68A5.39,5.39,0,0,0,6.85,9.51,2.12,2.12,0,0,1,5.5,10.88a3.82,3.82,0,0,0,1.18,7.44H17.32a3.81,3.81,0,0,0,1.18-7.44,2.12,2.12,0,0,1-1.35-1.37A5.36,5.36,0,0,0,13,5.78a4.87,4.87,0,0,0-1-.1Z" />
  </svg>
);

CloudIcon.displayName = "CloudIcon";

/* tslint:enable */
/* eslint-enable */
