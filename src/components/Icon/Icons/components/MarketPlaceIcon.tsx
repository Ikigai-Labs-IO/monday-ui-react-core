/* eslint-disable */
/* tslint:disable */
import * as React from "react";

export interface MarketPlaceIconProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}

export const MarketPlaceIcon: React.FC<MarketPlaceIconProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={size || "24"} height={size || "24"} {...props}>
    <path d="M7.6866 3.76396L10.1248 2.68282L7.6866 1.5293L5.24837 2.68282L7.6866 3.76396Z" />
    <path d="M10.8523 3.42057V6.74238L8.12474 8.0325L8.11458 8.01726V4.63451L10.8523 3.42057Z" />
    <path d="M11.2801 7.59017L13.7134 8.74139L11.2801 9.81587L8.84668 8.74139L8.85571 8.73688L11.2801 7.59017Z" />
    <path d="M14.438 9.49088V12.8553L11.7152 14.0626V10.6932L14.438 9.49088Z" />
    <path d="M10.8555 14.0805V10.6847L8.11133 9.47298V12.8637L10.8555 14.0805Z" />
    <path d="M7.23941 7.98303L7.24941 7.99803L7.23941 8.00303L4.54362 6.72766V3.45671L7.23941 4.65206V7.98303Z" />
    <path d="M7.25149 12.8553V9.49088L4.52865 10.6932V14.0626L7.25149 12.8553Z" />
    <path d="M4.09321 7.59017L6.52658 8.74139L4.09321 9.81587L1.65983 8.74139L4.09321 7.59017Z" />
    <path d="M3.6043 13.9721V10.7361L0.989258 9.58138V12.8126L3.6043 13.9721Z" />
  </svg>
);

MarketPlaceIcon.displayName = "MarketPlaceIcon";

/* tslint:enable */
/* eslint-enable */
