import React from "react";
import styles from "./TreeEntry.module.scss"

interface IndentProps {
  count?: number;
}

const TreeIndents: React.FC<IndentProps> = ({ count }) => {
  if (count === 0) return null;
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <span className={styles.indent} style={{ left: `calc(-1.875rem * ${index + 1} + 0.75rem)` }} key={`indent-${index}`} />
      ))}
    </>
  );
};

export default TreeIndents;
