import * as React from "react";
import styles from "../Pagination.module.scss";

type Props = {
  size: number;
  set: (perPage: number) => void;
};

export function PerPage({ size, set }: Props) {
  return (
    <nav className={styles["pagination-per-page"]} role="navigation" aria-label="pagination">
      <div className={styles["pagination-show"]}>Show:</div>
      {[10, 20, 50].map(element => (
        <button
          key={element}
          type="button"
          className={(styles["pagination-link"], styles[element.toString() === size.toString() ? "current" : ""])}
          onClick={() => set(element)}
        >
          <span>{element}</span>
        </button>
      ))}
    </nav>
  );
}
