import CategoryList from "../../../utility/Category/CategoryList/CategoryList";
import MainSection from "../../../utility/MainSection/MainSection";
import PaginationComp from "../../../utility/PaginationComp/PaginationComp";
import SectionHeading from "../../../utility/SectionHeading/SectionHeading";


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
