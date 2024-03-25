/* eslint-disable */
/* tslint:disable */
import * as React from "react";

export interface IoHelpCircleProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}

export const IoHelpCircle: React.FC<IoHelpCircleProps> = ({ size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size || "24"}
    height={size || "24"}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m12.5 13c0-2 1.5-1.5 1.5-3 0-.65625-.5-1.5-1.5-1.5s-1.5.5-2 1m2 6.5v-1.5m8-2c0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8 0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8z"
      stroke="#121923"
      stroke-width="1.2"
    />
  </svg>
);

IoHelpCircle.displayName = "IoHelpCircleIcon";

/* tslint:enable */
/* eslint-enable */
