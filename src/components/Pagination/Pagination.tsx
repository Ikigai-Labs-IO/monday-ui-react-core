import * as React from "react";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
import styles from "./Pagination.module.scss";
import { PerPage, PaginationAmount } from "./helper/index";
import { IExtendedPaginationProps, IPaginationBoxProps } from "./Props";

function Pagination({ count, from, set, size, firstPage = 0 }: IExtendedPaginationProps) {
  const currentPage = Math.ceil(from / size);
  const nPages = Math.ceil(count / size);

  const isFirstPageZero = firstPage === 0;
  const lastPage = isFirstPageZero ? nPages - 1 : nPages;

  // 6 & 7 pages make a lot of problem with dots so shrinking base number of visible
  // pages to 4 to avoid overlaps (problem: rendering dots and direct page at the same time)
  const baseNumberOfPages = [6, 7].includes(nPages) ? 4 : 5;

  const generatePagesItems = (numberOfPages: number, subtract = false) => {
    return Array.from(new Array(numberOfPages), (_, index) => {
      if (subtract) {
        return nPages - (index + 1);
      }
      return index;
    });
  };

  const getPages = () => {
    const endPages = generatePagesItems(baseNumberOfPages, true);
    if (currentPage < baseNumberOfPages - 1 + firstPage) {
      return generatePagesItems(baseNumberOfPages);
    } else if (endPages.includes(currentPage - 1)) {
      return endPages.reverse();
    } else {
      return [currentPage - 1, currentPage, currentPage + 1];
    }
  };

  const setPage = (pageNumber: number) => {
    if (currentPage !== pageNumber) {
      set(pageNumber * size);
    }
  };

  const showFirstPageJump = currentPage >= baseNumberOfPages && nPages > baseNumberOfPages;
  const showLastPageJump = currentPage + baseNumberOfPages <= nPages && nPages > baseNumberOfPages;

  return (
    <nav role="navigation" aria-label="pagination">
      <ul className={styles["pagination-list"]}>
        {currentPage > firstPage && (
          <li>
            <button
              type="button"
              className={styles["pagination-prev"]}
              data-testid="prev-page"
              onClick={() => setPage(currentPage - 1)}
              onKeyDown={() => setPage(currentPage - 1)}
            >
              <Icon isCustomIcon iconName="chevronLeft" />
            </button>
          </li>
        )}
        {showFirstPageJump && (
          <>
            <li>
              <button
                type="button"
                className={styles["pagination-link"]}
                data-testid="first-page"
                onClick={() => setPage(firstPage)}
                onKeyDown={() => setPage(firstPage)}
              >
                <span>1</span>
              </button>
            </li>
            <li className={styles["dots"]} data-testid="first-page-dots">
              <Text type={Text.types.TEXT1}>...</Text>
            </li>
          </>
        )}

        {[...getPages()]
          .filter(index => index < nPages)
          .map(index => {
            return (
              <li key={`p${index + firstPage}`}>
                <button
                  type="button"
                  disabled={index < 0}
                  data-testid={`button-${index + firstPage}`}
                  className={(styles["pagination-link"], styles[index + firstPage === currentPage ? "current" : ""])}
                  onClick={() => setPage(index + firstPage)}
                  onKeyDown={() => setPage(index + firstPage)}
                >
                  <span>{index + 1}</span>
                </button>
              </li>
            );
          })}

        {showLastPageJump && (
          <>
            <li className={styles["dots"]} data-testid="last-page-dots">
              <Text type={Text.types.TEXT1}>...</Text>
            </li>
            <li>
              <button
                type="button"
                className={styles["pagination-link"]}
                data-testid="last-page"
                onClick={() => setPage(lastPage)}
                onKeyDown={() => setPage(lastPage)}
              >
                <span>{nPages}</span>
              </button>
            </li>
          </>
        )}
        {currentPage < nPages - (isFirstPageZero ? 1 : 0) && (
          <li>
            <button
              type="button"
              className={styles["pagination-next"]}
              data-testid="next-page"
              onClick={() => setPage(currentPage + 1)}
              onKeyDown={() => setPage(currentPage + 1)}
            >
              <Icon isCustomIcon iconName="chevronRight" />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export function ExtendedPaginationBox({
  size,
  from,
  count,
  setSize,
  setPage,
  small,
  sidebar,
  firstPage
}: IPaginationBoxProps) {
  return (
    <nav
      className={styles.pagination}
      style={{
        border: sidebar ? "none" : "1px solid var(--ui-border-color)",
        justifyContent: small ? "center" : "space-between"
      }}
    >
      {!small && <PaginationAmount from={from} size={size} count={count} firstPage={firstPage} />}
      <Pagination from={from} set={setPage} size={size} count={count} firstPage={firstPage} />
      {!small && <PerPage size={size} set={setSize} />}
    </nav>
  );
}
