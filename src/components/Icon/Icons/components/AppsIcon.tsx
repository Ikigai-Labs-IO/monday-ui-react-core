/* eslint-disable */
/* tslint:disable */
import * as React from "react";

export interface AppsIconProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}

export const AppsIcon: React.FC<AppsIconProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={size || "24"} height={size || "24"} {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.01783 1.67529L14.1345 4.50478L14.1345 12.4631L8.04058 15.3238L1.8501 12.6101L1.86701 4.47106L8.01783 1.67529ZM3.35214 11.6308L3.36363 6.09898L7.23145 7.80392V13.3313L3.35214 11.6308ZM8.73145 13.3424L12.6345 11.5102V6.1118L8.73145 7.82148V13.3424ZM8.01234 3.32547L11.5359 4.95542L8.00096 6.50386L4.4568 4.94159L8.01234 3.32547Z"
    />
  </svg>
);

AppsIcon.displayName = "AppsIcon";

/* tslint:enable */
/* eslint-enable */
