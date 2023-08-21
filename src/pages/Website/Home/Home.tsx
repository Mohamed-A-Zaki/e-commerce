import BrandSection from "../../../components/Home/BrandSection/BrandSection";
import CategorySection from "../../../components/Home/CategorySection/CategorySection";
import Discount from "../../../components/Home/Discount/Discount";
import Slider from "../../../components/Home/Slider/Slider";
import ProductSection from "../../../utility/Product/ProductSection/ProductSection";


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
