export type CartProductType = {
  product: {
    _id: string;
    title: string;
    imageCover: string;
    category: {
      name: string;
    };
    brand: {
      name: string;
    };
    ratingsAverage: number;
    id: string;
  };
  count: number;
  color: string;
  price: number;
  _id: string;
};

export type GetCartProductsResponseType = {
  status: string;
  numOfCartItems: number;
  data: {
    _id: string;
    products: CartProductType[];
    totalCartPrice: number;
    coupon: string;
    totalAfterDiscount: number;
  };
};

export type AddProductToCartParamsType = {
  productId: string;
  color: string;
};

export type UpdateQuantityParamsType = {
  productId: string;
  values: {
    count: number;
  };
};
