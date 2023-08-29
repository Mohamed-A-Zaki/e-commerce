import { useAppSelector } from "../../../store/hooks";
import usePagination from "../../../Hooks/Pagination/usePagination";

import BrandList from "../../../utility/Brand/BrandList/BrandList";
import MainSection from "../../../utility/MainSection/MainSection";
import PaginationComp from "../../../utility/PaginationComp/PaginationComp";
import SectionHeading from "../../../utility/SectionHeading/SectionHeading";

export default function AllBrand() {
  const { number_of_pages } = useAppSelector((state) => state.Brands);

  usePagination(number_of_pages);

  return (
    <MainSection>
      <SectionHeading title={"كل الماركات"} />
      <BrandList />
      <PaginationComp />
    </MainSection>
  );
}
