import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { AddressType } from "../../../types/Address/Address.type";
import useAddressCard from "./../../../Hooks/Address/useAddressCard";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AddressCard(props: AddressType) {
  const { _id, alias, details, phone } = props;
  const { handleDeleteButton, handleEditButton } = useAddressCard(_id);

  return (
    <Card sx={{ borderRadius: 3, position: "relative" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography sx={{ flexGrow: 1 }}>{alias}</Typography>

        <Box position={"absolute"} top={15} left={15} display={"flex"} gap={1}>
        <Button
            variant="outlined"
            startIcon={<EditIcon />}
            color="secondary"
            aria-label="edit"
            size="small"
            onClick={handleEditButton}
            sx={{ flexDirection: "row-reverse" }}
          >
            تعديل
          </Button>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            color="error"
            aria-label="delete"
            size="small"
            onClick={handleDeleteButton}
            sx={{ flexDirection: "row-reverse" }}
          >
            حذف
          </Button>
        </Box>

        <Typography>{details}</Typography>

        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          رقم الهاتف :<Typography>{phone}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
