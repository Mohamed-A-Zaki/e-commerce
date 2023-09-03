import { Box } from "@mui/material";

export type DeleteEditBtnscontainerProps = {
  children: React.ReactNode;
};
export default function DeleteEditBtnscontainer({
  children,
}: DeleteEditBtnscontainerProps) {
  return (
    <Box position={"absolute"} top={15} left={15} display={"flex"} gap={1}>
      {children}
    </Box>
  );
}
