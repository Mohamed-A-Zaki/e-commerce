import { Stack } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import PaginationComp from "../../../utility/PaginationComp/PaginationComp";
import UserFavoriteList from "../../../components/User/UserFavoriteList/UserFavoriteList";

export default function UserFavourite() {
  return (
    <Stack spacing={2} my={2}>
      <SectionTitle>قائمة المفضلة</SectionTitle>
      <UserFavoriteList />
      <PaginationComp />
    </Stack>
  );
}
