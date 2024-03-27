import React from "react";
import { CustomIcon } from "../../Icon/Icons/components/CustomIcon";

interface TreeIconProps {
    iconSize?: string | number;
}

export const TreeFolderIcon: React.FC<TreeIconProps> = ({
    iconSize = 22
}) => {
    return (
        <CustomIcon viewBox="0 0 24 24" name="folder" iconSize={iconSize} fillColor="var(--type-secondary)" />
    );
};

export const TreeFileIcon: React.FC<TreeIconProps> = ({
    iconSize = 15
}) => {
    return (
        <CustomIcon viewBox="0 0 24 24" name="file" iconSize={iconSize} fillColor="var(--type-secondary)" />
    );
};

interface TreeStatusIconProps extends TreeIconProps {
    active?: boolean;
}

export const TreeStatusIcon: React.FC<TreeStatusIconProps> = ({
    iconSize = 22,
    active = false,
}) => {
    return (
        <svg viewBox="0 0 24 24" width={iconSize} height={iconSize} color="var(--type-secondary)">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            {!active && <path d="M12 8v8" />}
            <path d="M8 12h8" />
        </svg>
    );
};
