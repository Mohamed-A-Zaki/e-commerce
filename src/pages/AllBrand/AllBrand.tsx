import BrandList from "../../utility/BrandList/BrandList";
import MainSection from "../../utility/MainSection/MainSection";
import SectionHeading from "../../utility/SectionHeading/SectionHeading";

export default function AllBrand() {
  return (
    <MainSection>
      <SectionHeading title={"كل الماركات"} />
      <BrandList />
      <BrandList />
      <BrandList />
    </MainSection>
  );
}