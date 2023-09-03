import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export type DeleteButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
export default function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <Button
      variant="outlined"
      startIcon={<DeleteIcon />}
      color="error"
      aria-label="delete"
      size="small"
      onClick={onClick}
      sx={{ flexDirection: "row-reverse" }}
    >
      حذف
    </Button>
  );
}
