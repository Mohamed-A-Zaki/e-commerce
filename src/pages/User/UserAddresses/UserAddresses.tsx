import { Box, Stack } from "@mui/material";
import MainButton from "../../../utility/MainButton/MainButton";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import useUserAddresses from "../../../Hooks/Address/useUserAddresses";
import AddressList from "../../../components/User/AddressList/AddressList";
import DeleteAddressModal from "../../../components/Modals/DeleteAddressModal/DeleteAddressModal";

export default function UserAddresses() {
  const { handleClick } = useUserAddresses();

  return (
    <Stack spacing={2} my={2}>
      <SectionTitle>دفتر العنوانين</SectionTitle>
      <AddressList />
      <Box textAlign={"center"}>
        <MainButton onClick={handleClick}>اضف عنوان جديد</MainButton>
      </Box>
      <DeleteAddressModal />
    </Stack>
  );
}
