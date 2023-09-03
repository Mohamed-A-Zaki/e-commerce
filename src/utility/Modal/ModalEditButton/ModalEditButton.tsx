import { Button } from "@mui/material";

export type ModalEditButtonProps = {
  disabled: boolean;
};
export default function ModalEditButton({ disabled }: ModalEditButtonProps) {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      autoFocus
      disabled={disabled}
    >
      {disabled ? "جاري التعديل" : "تعديل"}
    </Button>
  );
}
