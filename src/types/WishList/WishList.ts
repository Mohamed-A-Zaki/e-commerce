import { ProductType } from "../Product/Product.type";

export type GetWishListResponseType = {
  status: string;
  data: ProductType[];
};
