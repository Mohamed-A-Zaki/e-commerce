import { Button, ButtonProps, SxProps, Theme } from "@mui/material";

export default function MainButton({ children, ...rest }: ButtonProps) {
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
