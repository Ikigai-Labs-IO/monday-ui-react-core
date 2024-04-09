import React, { useEffect, useMemo, useState } from "react";
import { useTreeContext } from "../Context/TreeContext";
import { makeChildPath, sortChildren, stopPropagation, setChildrenProps } from "../Helper/TreeHelp";
import { TreeStatusIcon, TreeFolderIcon, TreeFileIcon } from "./TreeIcons";
import Expand from "../Shared/Expand";
import styles from "./TreeEntry.module.scss"

interface Props {
  name: string;
  parentPath?: string;
  level?: number;
  disabled?: boolean;
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type TreeEntryProps = Props & NativeAttrs;

export const TreeFile: React.FC<React.PropsWithChildren<TreeEntryProps>> = ({
  name,
  level = 0,
  parentPath = "",
  disabled = false,
  ...props
}: React.PropsWithChildren<TreeEntryProps>) => {
  const { onFileClick } = useTreeContext();
  const currentPath = useMemo(
    () => makeChildPath(name, parentPath),
    [name, parentPath]
  );
  const clickHandler = (event: React.MouseEvent) => {
    stopPropagation(event);
    if (!disabled && onFileClick) {
      onFileClick(currentPath);
    }
  };

  return (
    <div
      className={styles.Container}
      style={level === 0 ? { marginLeft: "1.5rem" } : { marginLeft: `calc(2.775rem * ${level})` }}
      onClick={clickHandler}
      {...props}
    >
      <div className={styles.Names}>
        <span className={styles.Icon}>
          <TreeFileIcon disabled={disabled} />
        </span>
        <span className={`${styles.Name} ${disabled ? styles.Disabled : ''}`}>
          {name}
        </span>
      </div>
    </div>
  );
};

export const TreeFolder: React.FC<React.PropsWithChildren<TreeEntryProps>> = ({
  name,
  children,
  parentPath,
  level: parentLevel,
  disabled = false,
  ...props
}: React.PropsWithChildren<TreeEntryProps>) => {
  const { initialExpand, isImperative } = useTreeContext();
  const [expanded, setExpanded] = useState<boolean>(initialExpand);
  useEffect(() => setExpanded(initialExpand), [initialExpand]);

  const currentPath = useMemo(
    () => makeChildPath(name, parentPath),
    [name, parentPath]
  );

  const nextChildren = setChildrenProps(
    children,
    {
      parentPath: currentPath,
      level: (parentLevel ?? 0) + 1,
    },
    [TreeFolder, TreeFile]
  );
  const sortedChildren = isImperative
    ? nextChildren
    : sortChildren(nextChildren, TreeFolder);

  const clickHandler = () => {
    if (!disabled) {
      setExpanded(!expanded);
    }
  };

  return (
    <div className={styles.Container} onClick={clickHandler} {...props}>
      <div className={`${styles.Names} ${expanded ? styles.Hover : ''}`} style={{ marginLeft: `calc(1.2rem * ${parentLevel})` }}>
        <span className={styles.Icon}>
          <TreeStatusIcon active={expanded} disabled={disabled} />
        </span>
        <span className={styles.Icon}>
          <TreeFolderIcon active={expanded} disabled={disabled} />
        </span>
        <span className={`${styles.Name} ${expanded ? styles.Active : ''} ${disabled ? styles.Disabled : ''}`}>
          {name}
        </span>
      </div>
      <Expand isExpanded={expanded}>
        <div className={styles.Content} onClick={stopPropagation}>{sortedChildren}</div>
      </Expand>
    </div>
  );
};
