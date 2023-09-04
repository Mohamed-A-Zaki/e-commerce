import useProductDetails from "../../../Hooks/Product/useProductDetails";
import CategoryNavbar from "../../../utility/Category/CategoryNavbar/CategoryNavbar";
import ProductSection from "../../../utility/Product/ProductSection/ProductSection";
import RatesSection from "../../../components/ProductDetails/RatesSection/RatesSection";
import ProductDetailsContainer from "../../../components/ProductDetails/ProductDetailsContainer/ProductDetailsContainer";

export default function ProductDetails() {
  const { similerProducts, spescificProduct } = useProductDetails();

  return (
    <>
      <CategoryNavbar />
      <ProductDetailsContainer spescificProduct={spescificProduct} />
      <RatesSection />
      <ProductSection title="منتجات قد تعجبك" products={similerProducts} />
    </>
  );
}
