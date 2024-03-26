export const PAGINATION_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
} as const;

export type PaginationSize = (typeof PAGINATION_SIZES)[keyof typeof PAGINATION_SIZES];
