import usePagination from "../../../Hooks/Pagination/usePagination";
import BrandSection from "../../../components/Home/BrandSection/BrandSection";
import CategorySection from "../../../components/Home/CategorySection/CategorySection";
import Discount from "../../../components/Home/Discount/Discount";
import Slider from "../../../components/Home/Slider/Slider";
import { getBestSellerProducts } from "../../../store/ProductSlice/ProductSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import ProductSection from "../../../utility/Product/ProductSection/ProductSection";
import { useEffect } from "react";

export default function Home() {
  usePagination(0);
  const dispatch = useAppDispatch();
  const { bestSellerProducts } = useAppSelector((state) => state.Products);

  useEffect(() => {
    dispatch(getBestSellerProducts());
  }, [dispatch]);

  return (
    <>
      <Slider />
      <CategorySection />
      <ProductSection
        title="الاكثر مبيعا"
        products={bestSellerProducts}
        to="/products"
      />
      <Discount />
      <ProductSection
        title="احدث الازياء"
        products={bestSellerProducts}
        to="/products"
      />
      <BrandSection />
    </>
  );
}
