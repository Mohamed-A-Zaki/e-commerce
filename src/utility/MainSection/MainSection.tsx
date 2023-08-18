import { Container, Stack } from "@mui/material";

export type MainSectionProps = {
  children: React.ReactNode;
};
export default function MainSection({ children }: MainSectionProps) {
  return <Stack component={Container} fixed spacing={2} sx={{ my: 2 }}>{children}</Stack>;
}
