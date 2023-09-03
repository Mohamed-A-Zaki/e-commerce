import { Button } from "@mui/material";

export type ModalCancelButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
export default function ModalCancelButton({ onClick }: ModalCancelButtonProps) {
  return (
    <Button onClick={onClick} variant="contained" color="success">
      الغاء
    </Button>
  );
}
