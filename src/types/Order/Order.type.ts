import { PaginationResultType } from "../PaginationResult/PaginationResult.type";

export type GetAllOrdersType = {
  results: number;
  paginationResult: PaginationResultType;
  data: OrderType[];
};

export type UserOrdersType = {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export type OrderType = {
  shippingAddress: {
    details: string;
    phone: string;
    city: string;
    postalCode: string;
  };
  _id: string;
  user: UserOrdersType;
  cartItems: OrderProductType[];
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: string;
  isPaid: boolean;
  isDelivered: boolean;
  id: number;
};

export type OrderProductType = {
  product: {
    _id: string;
    title: string;
    imageCover: string;
    ratingsQuantity: number;
    ratingsAverage: number;
    id: string;
  };
  count: number;
  color: string;
  price: number;
  _id: string;
};

export type CreateCashOrderParamsType = {
  cartId: string;
  address: {
    shippingAddress: {
      details: string;
      phone: string;
      city: string;
      postalCode: string;
    };
  };
};
