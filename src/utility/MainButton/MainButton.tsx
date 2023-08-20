import { Button, SxProps, Theme } from "@mui/material";

export type MainButtonProps = {
  fullWidth?: boolean;
  children: React.ReactNode;
};
export default function MainButton({ children, fullWidth }: MainButtonProps) {
  return (
    <Button variant="contained" fullWidth={fullWidth} sx={ButtonStyle}>
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
