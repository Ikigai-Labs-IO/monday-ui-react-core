/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
import { uiIcons } from "../IkigaiTheme";

const paths = {
  ...uiIcons,
  default: <path />,
} as const;

export type PathName = keyof typeof paths;

const getPath = (name: PathName) => {
  return paths[name] ?? paths.default;
};

interface CustomIconProps extends React.SVGAttributes<SVGElement> {
  iconSize?: string | number;
  name?: PathName;
  fillColor?: string;
  viewBox?: string;
}

export const CustomIcon: React.FC<CustomIconProps> = ({ name, fillColor, iconSize, viewBox, ...props }) => {
  if (typeof name !== "string") {
    return null;
  }
  const Path = React.useMemo(() => getPath(name), [name]);

  return (
    <svg
      viewBox={viewBox || "0 0 27 30"}
      fill={fillColor || "currentColor"}
      width={iconSize || "20"}
      height={iconSize || "20"}
      {...props}
    >
      {Path}
    </svg>
  );
};
/* tslint:enable */
/* eslint-enable */
