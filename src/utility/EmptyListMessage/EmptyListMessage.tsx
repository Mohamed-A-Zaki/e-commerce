import { Typography } from "@mui/material";

export type EmptyListMessageProps = {
  children: React.ReactNode;
};
export default function EmptyListMessage({ children }: EmptyListMessageProps) {
  return (
    <Typography variant="h6" textAlign={"center"} flex={1}>
      {children}
    </Typography>
  );
}
