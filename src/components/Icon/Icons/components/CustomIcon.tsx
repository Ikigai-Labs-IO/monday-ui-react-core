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
}

export const CustomIcon: React.FC<CustomIconProps> = ({ name, iconSize, ...props }) => {
  if (typeof name !== "string") {
    return null;
  }
  const Path = React.useMemo(() => getPath(name), [name]);

  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
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
