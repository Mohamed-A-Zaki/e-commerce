import CategoryList from "../../../utility/Category/CategoryList/CategoryList";
import MainSection from "../../../utility/MainSection/MainSection";
import SectionHeading from "../../../utility/SectionHeading/SectionHeading";

export default function CategorySection() {
  return (
    <MainSection>
      <SectionHeading title={"التصنيفات"} to="/allcategory" />
      <CategoryList />
    </MainSection>
  );
}
