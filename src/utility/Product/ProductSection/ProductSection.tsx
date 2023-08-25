import MainSection from "../../MainSection/MainSection";
import ProductList from "../ProductList/ProductList";
import SectionHeading from "../../SectionHeading/SectionHeading";
import { ProductType } from "../../../types/Product/Product.type";

export type ProductSectionProps = {
  title: string;
  to?: string;
  products: ProductType[];
};
export default function ProductSection(props: ProductSectionProps) {
  const { title, to, products } = props;
  
  return (
    <MainSection>
      <SectionHeading title={title} to={to} />
      <ProductList products={products} />
    </MainSection>
  );
}
