import { Box } from "@mui/material";

export type ColorItemProps = {
  color: string;
};
export default function ColorItem({ color }: ColorItemProps) {
  return (
    <Box
      width={30}
      height={30}
      bgcolor={color}
      borderRadius={"50%"}
      border={1}
      borderColor={"#ddd"}
      sx={{ cursor: "pointer" }}
    ></Box>
  );
}
