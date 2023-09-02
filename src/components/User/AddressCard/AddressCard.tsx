import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { AddressType } from "../../../types/Address/Address.type";
import useAddressCard from "./../../../Hooks/Address/useAddressCard";

export default function AddressCard(props: AddressType) {
  const { _id, alias, details, phone } = props;
  const { handleDeleteButton, handleEditButton } = useAddressCard(_id);

  return (
    <Card sx={{ borderRadius: 3, position: "relative" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography sx={{ flexGrow: 1 }}>{alias}</Typography>

        <Box position={"absolute"} top={15} left={15}>
          <Button onClick={handleEditButton}>تعديل</Button>
          <Button onClick={handleDeleteButton}>حذف</Button>
        </Box>

        <Typography>{details}</Typography>

        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          رقم الهاتف :<Typography>{phone}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
