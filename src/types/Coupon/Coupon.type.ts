import { PaginationResultType } from "../PaginationResult/PaginationResult.type";

export type CouponFormDataType = {
  name: string;
  expire: string;
  discount: string;
};

export type CouponType = {
  _id: string;
  name: string;
  expire: string;
  discount: number;
  createdAt: string;
  updatedAt: string;
};

export type AddCouponResponseType = {
  data: CouponType;
};

export type GetCouponsResponseType = {
  results: number;
  paginationResult: PaginationResultType;
  data: CouponType[];
};

