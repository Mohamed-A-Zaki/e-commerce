import { Typography } from "@mui/material";

export type SectionTitleProps = {
  children: React.ReactNode;
};
export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <Typography variant="h6" fontWeight={"bold"}>
      {children}
    </Typography>
  );
}
