import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getSpescificBrand } from "../../store/BrandSlice/BrandSlice";
import { getSpescificCategory } from "../../store/CategorySlice/CategorySlice";
import { getSimilerProducts, getSpescificProduct } from "../../store/products/ProductSlice/ProductSlice";

const useProductDetails = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { similerProducts, spescificProduct } = useAppSelector(
    (state) => state.Products
  );

  useEffect(() => {
    // get similer products
    spescificProduct?.category &&
      dispatch(getSimilerProducts(spescificProduct.category));
    // get product details
    dispatch(getSpescificProduct(id as string));
    // get category details
    spescificProduct?.category &&
      dispatch(getSpescificCategory(spescificProduct.category));
    // get brand details
    spescificProduct?.brand &&
      dispatch(getSpescificBrand(spescificProduct.brand));
  }, [dispatch, id, spescificProduct?.brand, spescificProduct?.category]);

  return { similerProducts , spescificProduct }
};

export default useProductDetails;
