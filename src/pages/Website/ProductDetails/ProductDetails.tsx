import CategoryNavbar from "../../../utility/Category/CategoryNavbar/CategoryNavbar";
import ProductSection from "../../../utility/Product/ProductSection/ProductSection";
import RatesSection from "../../../components/ProductDetails/RatesSection/RatesSection";
import ProductDetailsContainer from "../../../components/ProductDetails/ProductDetailsContainer/ProductDetailsContainer";

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
