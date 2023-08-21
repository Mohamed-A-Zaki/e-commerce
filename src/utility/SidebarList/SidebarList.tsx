import { List } from "@mui/material";
import SidebarListItem from "../SidebarListItem/SidebarListItem";

export type SidebarListProps = {
  list: { id: number; text: string; to: string }[];
};
export default function SidebarList({ list }: SidebarListProps) {
  return (
    <List sx={{ my: 2, bgcolor: "#fff", borderRadius: 3, height: "100vh" }}>
      {list.map(({ id, text, to }) => {
        return <SidebarListItem key={id} text={text} to={to} />;
      })}
    </List>
  );
}
