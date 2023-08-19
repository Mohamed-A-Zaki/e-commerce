import MainSection from "../../../utility/MainSection/MainSection";
import CategoryList from "../../../utility/CategoryList/CategoryList";
import SectionHeading from "../../../utility/SectionHeading/SectionHeading";

export default function CategorySection() {
  return (
    <MainSection>
      <SectionHeading title={"التصنيفات"} to="/allcategory" />
      <CategoryList />
    </MainSection>
  );
}
