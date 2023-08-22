export type CategoryType = {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type PaginationResultType = {
  currentPage: number;
  numberOfPages: number;
  limit: number;
};

export type GetCategoriesResponseType = {
  results: number;
  data: CategoryType[];
  paginationResult: PaginationResultType;
};

export type CreateCategoryResponseType = {
  data: CategoryType;
};
