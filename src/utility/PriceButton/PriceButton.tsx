import { Box } from "@mui/material";

export type PriceButtonProps = {
  children: React.ReactNode;
};
export default function PriceButton({ children }: PriceButtonProps) {
  return (
    <Box
      px={2}
      py={1.5}
      bgcolor={"#fff"}
      borderRadius={2}
      border={1}
      textAlign="center"
      borderColor={"#ddd"}
    >
      {children} جنيه
    </Box>
  );
}
