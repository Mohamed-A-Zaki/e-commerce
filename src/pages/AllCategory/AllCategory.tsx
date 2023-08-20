import MainSection from "../../utility/MainSection/MainSection";
import SectionHeading from "../../utility/SectionHeading/SectionHeading";
import PaginationComp from "../../utility/PaginationComp/PaginationComp";
import CategoryList from "../../utility/Category/CategoryList/CategoryList";

export default function AllCategory() {
  return (
    <MainSection>
      <SectionHeading title={"كل التصنيفات"} />
      <CategoryList />
      <CategoryList />
      <CategoryList />
      <PaginationComp />
    </MainSection>
  );
}
