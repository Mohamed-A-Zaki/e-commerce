import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export type EditButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
export default function EditButton({ onClick }: EditButtonProps) {
  return (
    <Button
      variant="outlined"
      startIcon={<EditIcon />}
      color="secondary"
      aria-label="edit"
      size="small"
      onClick={onClick}
      sx={{ flexDirection: "row-reverse" }}
    >
      تعديل
    </Button>
  );
}
