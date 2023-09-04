import { Box, BoxProps } from "@mui/material";

export type ColorItemProps = { color: string } & BoxProps;

export default function ColorItem({ color, ...rest }: ColorItemProps) {
  return (
    <Box
      {...rest}
      width={30}
      height={30}
      bgcolor={color}
      borderRadius={"50%"}
      sx={{ cursor: "pointer" }}
    ></Box>
  );
}
