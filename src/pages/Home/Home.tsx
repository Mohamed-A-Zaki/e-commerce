import CategorySection from "../../components/Home/CategorySection/CategorySection";
import Slider from "../../components/Home/Slider/Slider";
import BrandSection from "../../components/Home/BrandSection/BrandSection";
import ProductSection from "../../utility/ProductSection/ProductSection";
import Discount from "../../components/Home/Discount/Discount";

export default function Home() {
  return (
    <>
      <Slider />
      <CategorySection />
      <ProductSection title="الاكثر مبيعا" to="/products" />
      <Discount />
      <ProductSection title="احدث الازياء" to="/products" />
      <BrandSection />
    </>
  );
}
