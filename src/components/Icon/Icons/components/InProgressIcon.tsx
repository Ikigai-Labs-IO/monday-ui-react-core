/* eslint-disable */
/* tslint:disable */
import * as React from "react";

export interface InProgressIconProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}

export const InProgressIcon: React.FC<InProgressIconProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={size || "24"} height={size || "24"} {...props}>
    <path d="M7.16022 4.12988C4.60444 4.12988 2.53027 6.20408 2.53027 8.75988C2.53027 11.3157 4.60444 13.3899 7.16022 13.3899C8.59663 13.3899 9.87789 12.7375 10.7317 11.7026L11.209 11.1241L12.3661 12.0786L11.8888 12.6572C10.7626 14.0222 9.0638 14.8899 7.16022 14.8899C3.77599 14.8899 1.03027 12.1441 1.03027 8.75988C1.03027 5.37568 3.77599 2.62988 7.16022 2.62988C10.1523 2.62988 12.2785 4.56954 12.681 6.75H15.8108L12.8132 9.74749C12.3641 10.1966 11.636 10.1966 11.1869 9.74748L8.18945 6.75H11.1383C10.7482 5.42525 9.35178 4.12988 7.16022 4.12988Z" />
  </svg>
);

InProgressIcon.displayName = "InProgressIcon";

/* tslint:enable */
/* eslint-enable */
