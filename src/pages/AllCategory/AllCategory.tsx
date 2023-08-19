import MainSection from "../../utility/MainSection/MainSection";
import CategoryList from "../../utility/CategoryList/CategoryList";
import SectionHeading from "../../utility/SectionHeading/SectionHeading";
import PaginationComp from "../../utility/PaginationComp/PaginationComp";

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
