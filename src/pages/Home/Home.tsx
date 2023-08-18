import CategorySection from "../../components/Home/CategorySection/CategorySection";
import Navbar from "../../utility/Navbar/Navbar";
import Slider from "../../components/Home/Slider/Slider";
import BrandSection from "../../components/Home/BrandSection/BrandSection";
import ProductSection from "../../utility/ProductSection/ProductSection";
import Discount from "../../components/Home/Discount/Discount";
import Footer from "../../utility/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <CategorySection />
      <ProductSection title="الاكثر مبيعا" to="/" />
      <Discount />
      <ProductSection title="احدث الازياء" to="/" />
      <BrandSection />
      <Footer />
    </>
  );
}
