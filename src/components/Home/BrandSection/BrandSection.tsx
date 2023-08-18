import BrandList from "../../../utility/BrandList/BrandList";
import MainSection from "../../../utility/MainSection/MainSection";
import SectionHeading from "../../../utility/SectionHeading/SectionHeading";

export default function BrandSection() {
  return (
    <MainSection>
      <SectionHeading title={"اشهر الماركات"} to="/" />
      <BrandList />
    </MainSection>
  );
}
