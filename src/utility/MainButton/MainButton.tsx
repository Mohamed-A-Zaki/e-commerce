import { Button, SxProps, Theme } from "@mui/material";

export type MainButtonProps = {
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
export default function MainButton({ children, ...rest }: MainButtonProps) {
  return (
    <Button variant="contained" sx={ButtonStyle} {...rest}>
      {children}
    </Button>
  );
}

const ButtonStyle: SxProps<Theme> = {
  py: 1.5,
  px: 2,
  bgcolor: "#000",
  borderRadius: 2,

  "&:hover": {
    bgcolor: "#000",
  },
};
