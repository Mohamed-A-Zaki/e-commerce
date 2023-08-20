import ProductDetailsContainer from "../../components/ProductDetails/ProductDetailsContainer/ProductDetailsContainer";
import RatesSection from "../../components/ProductDetails/RatesSection/RatesSection";
import CategoryNavbar from "../../utility/CategoryNavbar/CategoryNavbar";
import ProductSection from "../../utility/ProductSection/ProductSection";

export default function ProductDetails() {
  return (
    <>
      <CategoryNavbar />
      <ProductDetailsContainer />
      <RatesSection />
      <ProductSection title="منتجات قد تعجبك" />
    </>
  );
}
