import { useAppSelector } from "../../../store/hooks";
import usePagination from "../../../Hooks/Pagination/usePagination";

import MainSection from "../../../utility/MainSection/MainSection";
import PaginationComp from "../../../utility/PaginationComp/PaginationComp";
import SectionHeading from "../../../utility/SectionHeading/SectionHeading";
import CategoryList from "../../../utility/Category/CategoryList/CategoryList";

export default function AllCategory() {
  const { number_of_pages } = useAppSelector((state) => state.Categories);

  usePagination(number_of_pages);

  return (
    <MainSection>
      <SectionHeading title={"كل التصنيفات"} />
      <CategoryList />
      <PaginationComp />
    </MainSection>
  );
}
