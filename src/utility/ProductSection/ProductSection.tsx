import MainSection from "../MainSection/MainSection";
import ProductList from "../ProductList/ProductList";
import SectionHeading from "../SectionHeading/SectionHeading";

export type ProductSectionProps = {
  title: string;
  to?: string;
};
export default function ProductSection({ title, to }: ProductSectionProps) {
  return (
    <MainSection>
      <SectionHeading title={title} to={to} />
      <ProductList />
    </MainSection>
  );
}
