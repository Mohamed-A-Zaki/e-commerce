import { Box, Stack } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import AddressList from "../../../components/User/AddressList/AddressList";
import MainButton from "../../../utility/MainButton/MainButton";
import { useNavigate } from "react-router-dom";

export default function UserAddresses() {
  const navigate = useNavigate();

  return (
    <Stack spacing={2} my={2}>
      <SectionTitle>دفتر العنوانين</SectionTitle>
      <AddressList />
      <Box textAlign={"center"}>
        <MainButton onClick={() => navigate("/user/add-address")}>
          اضف عنوان جديد
        </MainButton>
      </Box>
    </Stack>
  );
}
