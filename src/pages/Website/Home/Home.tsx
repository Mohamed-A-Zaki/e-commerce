import usePagination from "../../../Hooks/usePagination";
import BrandSection from "../../../components/Home/BrandSection/BrandSection";
import CategorySection from "../../../components/Home/CategorySection/CategorySection";
import Discount from "../../../components/Home/Discount/Discount";
import Slider from "../../../components/Home/Slider/Slider";
import { useAppSelector } from "../../../store/hooks";
import ProductSection from "../../../utility/Product/ProductSection/ProductSection";

export default function Home() {
  usePagination(0);

  const { bestSellerProducts } = useAppSelector((state) => state.Products);

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
