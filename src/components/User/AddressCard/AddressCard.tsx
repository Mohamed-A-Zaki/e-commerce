import { Box, Card, CardContent, Typography } from "@mui/material";
import { AddressType } from "../../../types/Address/Address.type";
import useAddressCard from "./../../../Hooks/Address/useAddressCard";

import DeleteEditBtnscontainer from "../../../utility/DeleteEditBtnscontainer/DeleteEditBtnscontainer";
import EditButton from "../../../utility/EditButton/EditButton";
import DeleteButton from "../../../utility/DeleteButton/DeleteButton";

export default function AddressCard(props: AddressType) {
  const { _id, alias, details, phone } = props;
  const { handleDeleteButton, handleEditButton } = useAddressCard(_id);

  return (
    <Card sx={{ borderRadius: 3, position: "relative" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography sx={{ flexGrow: 1 }}>{alias}</Typography>

        <DeleteEditBtnscontainer>
          <EditButton onClick={handleEditButton} />
          <DeleteButton onClick={handleDeleteButton} />
        </DeleteEditBtnscontainer>

        <Typography>{details}</Typography>

        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          رقم الهاتف :<Typography>{phone}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
