import { Button, ButtonProps, SxProps, Theme } from "@mui/material";

// export type MainButtonProps = {
//   fullWidth?: boolean;
//   type?: "button" | "submit" | "reset" | undefined;
//   children: React.ReactNode;
//   onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
// };

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
