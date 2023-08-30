import { PaginationResultType } from "../PaginationResult/PaginationResult.type";
import { ReviewType } from "../Rating/Rating";

export type ProductType = {
  title: string;
  slug: string;
  description: string;
  quantity: number;
  sold: number;
  price: number;
  brand: string;
  availableColors: string[];
  imageCover: string;
  images: string[];
  category: string;
  subcategory: string[];
  ratingsQuantity: number;
  _id: string;
  ratingsAverage: number;
  reviews: ReviewType[];
  createdAt: string;
  updatedAt: string;
};

export type GetProductsResponseType = {
  results: number;
  data: ProductType[];
  paginationResult: PaginationResultType;
};

export type CreateProductResponseType = {
  data: ProductType;
};
