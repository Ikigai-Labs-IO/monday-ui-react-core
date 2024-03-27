import React, { useEffect, useMemo, useState } from "react";
import { useTreeContext } from "../Context/TreeContext";
import { makeChildPath, sortChildren, stopPropagation, setChildrenProps } from "../Helper/TreeHelp";
import TreeIndents from "./TreeIndents";
import { TreeStatusIcon, TreeFolderIcon, TreeFileIcon } from "./TreeIcons";
import Expand from "../Shared/Expand";
import styles from "./TreeEntry.module.scss"

interface Props {
  name: string;
  extra?: string;
  parentPath?: string;
  level?: number;
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type TreeEntryProps = Props & NativeAttrs;

export const TreeFile: React.FC<React.PropsWithChildren<TreeEntryProps>> = ({
  name,
  level = 0,
  parentPath = "",
  extra,
  ...props
}: React.PropsWithChildren<TreeEntryProps>) => {
  const { onFileClick } = useTreeContext();
  const currentPath = useMemo(
    () => makeChildPath(name, parentPath),
    [name, parentPath]
  );
  const clickHandler = (event: React.MouseEvent) => {
    stopPropagation(event);
    onFileClick && onFileClick(currentPath);
  };

  return (
    <div
      className={styles.Container}
      style={{ marginLeft: `calc(1.875rem * ${level})` }}
      onClick={clickHandler}
      {...props}
    >
      <div className={styles.Names}>
        <TreeIndents count={level} />
        <span className={styles.Icon}>
          <TreeFileIcon />
        </span>
        <span className={styles.fileName}>
          {name}
          {extra && <span className={styles.Extra}>{extra}</span>}
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
  extra,
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

  const clickHandler = () => setExpanded(!expanded);

  return (
    <div className={styles.Container} onClick={clickHandler} {...props}>
      <div className={styles.Names} style={{ marginLeft: `calc(1.875rem * ${parentLevel})` }}>
        <TreeIndents count={parentLevel} />
        <span className={styles.Status}>
          <TreeStatusIcon active={expanded} />
        </span>
        <span className={styles.Icon}>
          <TreeFolderIcon />
        </span>
        <span className={styles.folderName}>
          {name}
          {extra && <span className={styles.Extra}>{extra}</span>}
        </span>
      </div>
      <Expand isExpanded={expanded}>
        <div className={styles.Content} onClick={stopPropagation}>{sortedChildren}</div>
      </Expand>
    </div>
  );
};
