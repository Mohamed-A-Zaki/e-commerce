import { Button } from "@mui/material";

export type ModalDeleteButtonProps = {
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
export default function ModalDeleteButton({
  onClick,
  disabled,
}: ModalDeleteButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="error"
      autoFocus
      disabled={disabled}
    >
      {disabled ? "جاري الحذف" : "حذف"}
    </Button>
  );
}
