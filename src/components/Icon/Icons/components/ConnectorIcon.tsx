/* eslint-disable */
/* tslint:disable */
import * as React from "react";

export interface ConnectorIconProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}

export const ConnectorIcon: React.FC<ConnectorIconProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={size || "24"} height={size || "24"} {...props}>
    <path d="M11.2617 6.25001V9.29933L14.2592 6.30189C14.7083 5.85279 14.7083 5.12465 14.2592 4.67555L11.2617 1.67801V4.75001L5.25002 4.75001L5.25003 6.25001L11.2617 6.25001Z" />
    <path d="M4.68704 12.25V15.2478L1.68954 12.2503C1.24044 11.8012 1.24045 11.073 1.68956 10.6239L4.68704 7.62648V10.75H10.75V12.25H4.68704Z" />
  </svg>
);

ConnectorIcon.displayName = "ConnectorIcon";

/* tslint:enable */
/* eslint-enable */
