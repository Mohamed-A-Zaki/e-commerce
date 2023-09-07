import { Stack } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import UserOrderList from "../../../components/User/UserOrderList/UserOrderList";
import { useAppSelector } from "../../../store/hooks";
import PaginationComp from "../../../utility/PaginationComp/PaginationComp";
import usePagination from "../../../Hooks/Pagination/usePagination";

export default function UserAllOrders() {
  const { user } = useAppSelector((state) => state.Auth);
  const { number_of_pages } = useAppSelector((state) => state.Order);

  usePagination(number_of_pages);

  return (
    <Stack spacing={2} my={2}>
      <SectionTitle>اهلا ( {user.name} )</SectionTitle>
      <UserOrderList />
      <PaginationComp />
    </Stack>
  );
}
