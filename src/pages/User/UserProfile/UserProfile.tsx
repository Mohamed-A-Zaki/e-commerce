import { Stack } from "@mui/material";

import UserInfo from "../../../components/User/UserInfo/UserInfo";
import ChangePassword from "../../../components/User/ChangePassword/ChangePassword";

export default function UserProfile() {
  return (
    <Stack spacing={2} my={2}>
      <UserInfo />
      <ChangePassword />
    </Stack>
  );
}
