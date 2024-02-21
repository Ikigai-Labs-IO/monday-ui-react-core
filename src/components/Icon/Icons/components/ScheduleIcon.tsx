/* eslint-disable */
/* tslint:disable */
import * as React from "react";

export interface ScheduleIconProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}

export const ScheduleIcon: React.FC<ScheduleIconProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={size || "24"} height={size || "24"} {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.75 2.5H7.25V1.5H8.75V2.5H11.25V1.5H12.75V2.5H15V15.5H1V2.5H3.25V1.5H4.75V2.5ZM11.25 4V5.5H12.75V4H13.5V6.75H2.5V4H3.25V5.5H4.75V4H7.25V5.5H8.75V4H11.25ZM13.5 14V8.25H2.5V14H13.5Z"
    />
  </svg>
);

ScheduleIcon.displayName = "ScheduleIcon";

/* tslint:enable */
/* eslint-enable */
