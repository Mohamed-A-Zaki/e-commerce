import { Stack } from "@mui/material";
import MoreButton from "../MoreButton/MoreButton";
import SectionTitle from "../SectionTitle/SectionTitle";

export type SectionHeadingProps = {
  title: string;
  to?: string;
};
export default function SectionHeading({ title, to }: SectionHeadingProps) {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <SectionTitle>{title}</SectionTitle>
      {to ? <MoreButton to={to} /> : null}
    </Stack>
  );
}
