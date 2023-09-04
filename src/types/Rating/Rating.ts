import { PaginationResultType } from "../PaginationResult/PaginationResult.type";

export type ReviewType = {
  _id: string;
  review: string;
  rating: number;
  user:
    | {
        _id: string;
        name: string;
      }
    | string;
  product: string;
  createdAt: string;
  updatedAt: string;
};

export type RatingFormDataType = {
  review: string;
  rating: string;
};

export type GetReviewsResponseType = {
  results: number;
  paginationResult: PaginationResultType;
  data: ReviewType[];
};

export type CreateRatingProps = {
  prod_id: string;
  values: RatingFormDataType;
};

export type EditRatingProps = {
  rate_id: string;
  values: RatingFormDataType;
};

export type CreateReviewResponeType = {
  data: ReviewType;
};
