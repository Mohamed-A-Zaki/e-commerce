import { PaginationResultType } from "../PaginationResult/PaginationResult.type";

export type CategoryType = {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type GetCategoriesResponseType = {
  results: number;
  data: CategoryType[];
  paginationResult: PaginationResultType;
};

export type CreateCategoryResponseType = {
  data: CategoryType;
};
