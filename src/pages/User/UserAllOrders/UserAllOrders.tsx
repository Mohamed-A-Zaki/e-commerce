import { Stack } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import UserOrderList from "../../../components/User/UserOrderList/UserOrderList";

export default function UserAllOrders() {
  return (
    <Stack spacing={2} my={2}>
      <SectionTitle>اهلا محمد على</SectionTitle>
      <UserOrderList />
    </Stack>
  );
}
