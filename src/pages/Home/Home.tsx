import CategorySection from "../../components/Home/CategorySection/CategorySection";
import Navbar from "../../utility/Navbar/Navbar";
import Slider from "../../components/Home/Slider/Slider";
import BrandSection from "../../components/Home/BrandSection/BrandSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <CategorySection />
      <BrandSection />
    </>
  );
}
