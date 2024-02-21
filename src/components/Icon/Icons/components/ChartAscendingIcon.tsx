/* eslint-disable */
/* tslint:disable */
import * as React from "react";

export interface ChartAscendingIconProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}

export const ChartAscendingIcon: React.FC<ChartAscendingIconProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size || "24"} height={size || "24"} {...props}>
    <path d="M22,22.63H2a.88.88,0,0,1,0-1.75H22a.88.88,0,1,1,0,1.75Z" />
    <path d="M20.63,18.36a.88.88,0,0,1-.88-.88V8A.88.88,0,1,1,21.5,8v9.47A.87.87,0,0,1,20.63,18.36Z" />
    <path d="M16.13,18.36a.87.87,0,0,1-.88-.88V10.2a.88.88,0,0,1,1.75,0v7.28A.87.87,0,0,1,16.13,18.36Z" />
    <path d="M11.63,18.36a.87.87,0,0,1-.88-.88V12.4a.88.88,0,1,1,1.75,0v5.08A.87.87,0,0,1,11.63,18.36Z" />
    <path d="M7.12,18.36a.87.87,0,0,1-.87-.88V10.2A.88.88,0,0,1,8,10.2v7.28A.87.87,0,0,1,7.12,18.36Z" />
    <path d="M2.62,18.36a.87.87,0,0,1-.87-.88v-4a.88.88,0,1,1,1.75,0v4A.88.88,0,0,1,2.62,18.36Z" />
    <path d="M2.84,8.61A.88.88,0,0,1,2.36,7L7.07,3.92a2.38,2.38,0,0,1,1.81-.63,2.41,2.41,0,0,1,1.77,1L11.8,5.78a.7.7,0,0,0,.49.27.71.71,0,0,0,.53-.2L13,5.73l6.58-4.22A.87.87,0,1,1,20.49,3L14,7.16a2.4,2.4,0,0,1-1.81.63,2.43,2.43,0,0,1-1.77-1L9.25,5.3A.68.68,0,0,0,8.76,5a.71.71,0,0,0-.53.2l-.14.11L3.32,8.47A.84.84,0,0,1,2.84,8.61Z" />
  </svg>
);

ChartAscendingIcon.displayName = "ChartAscendingIcon";

/* tslint:enable */
/* eslint-enable */
