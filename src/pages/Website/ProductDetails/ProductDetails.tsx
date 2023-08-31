import CategoryNavbar from "../../../utility/Category/CategoryNavbar/CategoryNavbar";
import ProductSection from "../../../utility/Product/ProductSection/ProductSection";
import RatesSection from "../../../components/ProductDetails/RatesSection/RatesSection";
import ProductDetailsContainer from "../../../components/ProductDetails/ProductDetailsContainer/ProductDetailsContainer";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getSpescificCategory } from "../../../store/CategorySlice/CategorySlice";
import { getSpescificBrand } from "../../../store/BrandSlice/BrandSlice";
import { getSimilerProducts, getSpescificProduct } from "../../../store/products/ProductSlice/ProductSlice";

export default function ProductDetails() {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { similerProducts, spescificProduct } = useAppSelector(
    (state) => state.Products
  );
  // const { specificBrand } = useAppSelector((state) => state.Brands);

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

  return (
    <>
      <CategoryNavbar />
      <ProductDetailsContainer spescificProduct={spescificProduct} />
      <RatesSection />
      <ProductSection title="منتجات قد تعجبك" products={similerProducts} />
    </>
  );
}
