import { Typography } from "@mui/material";

export type ErrorMessageProps = {
  children: React.ReactNode;
};
export default function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <Typography variant="h4" textAlign={"center"} color={"error.main"}>
      {children}
    </Typography>
  );
}
