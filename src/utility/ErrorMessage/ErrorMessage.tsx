import { Typography } from "@mui/material";

export type ErrorMessageProps = {
  children: React.ReactNode;
};
export default function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <Typography variant="h6" textAlign={"center"} flex={1} color={"error.main"}>
      {children}
    </Typography>
  );
}
