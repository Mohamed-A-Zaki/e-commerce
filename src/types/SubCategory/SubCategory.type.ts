import { PaginationResultType } from "../PaginationResult/PaginationResult.type";

export type SubCategoryType = {
  _id: "64e7ad18c17e978967a5154a";
  name: "تسوق فرعي 9";
  slug: "tswq-fray-9";
  category: "64e520c01e7873a66d718a5d";
  createdAt: "2023-08-24T19:18:48.102Z";
  updatedAt: "2023-08-24T19:18:48.102Z";
};

export type GetSubCategoryResponseType = {
  results: number;
  data: SubCategoryType[];
  paginationResult: PaginationResultType;
};

export type CreateSubCategoryResponseType = {
  data: SubCategoryType;
};
