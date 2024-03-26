import cx from "classnames";
import * as React from "react";
import Icon from "../Icon/Icon";
import { useMemo } from "react";
import { camelCase } from "lodash-es";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Pagination.module.scss";
import IconButton from "../IconButton/IconButton";
import { PAGINATION_SIZES } from "./PaginationConstants";
import { PerPage, PaginationAmount } from "./helper/index";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { IExtendedPaginationProps, IPaginationBoxProps } from "./Props";

function Pagination({ count, from, set, size, firstPage = 0 }: IExtendedPaginationProps) {
  const currentPage = Math.ceil(from / size);
  const nPages = Math.ceil(count / size);

  const isFirstPageZero = firstPage === 0;

  const setPage = (pageNumber: number) => {
    if (currentPage !== pageNumber) {
      set(pageNumber * size);
    }
  };

  const options = Array.from({ length: nPages }, (_, index) => ({ value: index + firstPage, label: `${index + 1}` }));

  const handlePageChange = (selectedOption: { value: number }) => {
    set(selectedOption.value * size);
  };

  return (
    <nav role="navigation" aria-label="pagination" style={{ display: "flex", gap: "8px" }}>
      <ul className={styles["pagination-list"]}>
        {currentPage > firstPage && (
          <li>
            <IconButton
              className={styles["pagination-prev"]}
              data-testid="prev-page"
              size="small"
              onClick={() => setPage(currentPage - 1)}
              icon={() => <Icon isCustomIcon iconName="chevronLeft" />}
            />
          </li>
        )}
        <li>
          <Dropdown
            options={options}
            singleValueWrapperClassName={styles.singleValue}
            value={{ value: currentPage, label: `${currentPage}` }}
            placeholder={currentPage}
            size="xs"
            onChange={handlePageChange}
          />
        </li>
        {currentPage < nPages - (isFirstPageZero ? 1 : 0) && (
          <li>
            <IconButton
              className={styles["pagination-next"]}
              data-testid="next-page"
              size="small"
              onClick={() => setPage(currentPage + 1)}
              icon={() => <Icon isCustomIcon iconName="chevronRight" />}
            />
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
  firstPage,
  isItemPerPage = false,
  paginationSizes = PAGINATION_SIZES.MEDIUM
}: IPaginationBoxProps) {
  const classNames = useMemo(
    () => cx(styles.pagination, getStyle(styles, camelCase("pagination" + "-" + paginationSizes))),
    [paginationSizes]
  );
  return (
    <nav className={classNames} style={{ justifyContent: small ? "center" : "space-between" }}>
      {!small &&
        (isItemPerPage ? (
          <PerPage size={size} set={setSize} />
        ) : (
          <PaginationAmount from={from} size={size} count={count} firstPage={firstPage} />
        ))}
      <Pagination from={from} set={setPage} size={size} count={count} firstPage={firstPage} />
    </nav>
  );
}
