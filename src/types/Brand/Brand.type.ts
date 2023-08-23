import { PaginationResultType } from "../PaginationResult/PaginationResult.type";

export type BrandType = {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type GetBrandResponseType = {
  results: number;
  data: BrandType[];
  paginationResult: PaginationResultType;
};

export type CreateBrandResponseType = {
  data: BrandType;
};
