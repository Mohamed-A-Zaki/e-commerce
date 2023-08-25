import CategoryNavbar from "../../../utility/Category/CategoryNavbar/CategoryNavbar";
import ProductSection from "../../../utility/Product/ProductSection/ProductSection";
import RatesSection from "../../../components/ProductDetails/RatesSection/RatesSection";
import ProductDetailsContainer from "../../../components/ProductDetails/ProductDetailsContainer/ProductDetailsContainer";
import { useAppSelector } from "../../../store/hooks";
// import { useEffect } from "react";
// import { getSimilerProducts } from "../../../store/ProductSlice/ProductSlice";

export default function ProductDetails() {
  // const dispatch = useAppDispatch()
  const { similerProducts } = useAppSelector((state) => state.Products);

  // useEffect(() => {
  //   dispatch(getSimilerProducts())
  // }, [])

  return (
    <>
      <CategoryNavbar />
      <ProductDetailsContainer />
      <RatesSection />
      <ProductSection title="منتجات قد تعجبك" products={similerProducts} />
    </>
  );
}
