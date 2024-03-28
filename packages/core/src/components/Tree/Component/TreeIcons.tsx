import React from "react";
import { CustomIcon } from "../../Icon/Icons/components/CustomIcon";

interface TreeIconProps {
    iconSize?: string | number;
    active?: boolean;
    disabled?: boolean;
}

export const TreeFolderIcon: React.FC<TreeIconProps> = ({
    iconSize = 22,
    active = false,
    disabled = false
}) => {
    const fillColor = disabled ? "var(--divider-tertiary)" : (active ? "var(--divider-selected)" : "var(--type-secondary)");
    return (
        <CustomIcon fillColor={fillColor} viewBox="0 -3 24 24" name="folder" iconSize={iconSize} />
    );
};

export const TreeFileIcon: React.FC<TreeIconProps> = ({
    iconSize = 15,
    disabled = false
}) => {
    const fillColor = disabled ? "var(--divider-tertiary)" : "var(--type-secondary)";
    return (
        <CustomIcon viewBox="0 0 24 24" name="file" iconSize={iconSize} fillColor={fillColor} />
    );
};

export const TreeStatusIcon: React.FC<TreeIconProps> = ({
    iconSize = 16,
    active = false,
    disabled = false
}) => {
    const fillColor = disabled ? "var(--divider-tertiary)" : (active ? "var(--divider-selected)" : "var(--type-secondary)");
    return (
        <CustomIcon fillColor={fillColor} viewBox="0 2 24 24" name={active ? "chevronDown" : "chevronRight"} iconSize={iconSize} />
    );
};
