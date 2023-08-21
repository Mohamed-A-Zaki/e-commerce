import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { MenuItemStyle } from "../../Styles/Styles";

export type SidebarListItemProps = {
  text: string;
  to: string;
};
export default function SidebarListItem({ text, to }: SidebarListItemProps) {
  return (
    <Link to={to}>
      <ListItem disablePadding sx={{ borderBottom: 1, borderColor: "#ddd" }}>
        <ListItemButton
          sx={{
            ...MenuItemStyle,
            textAlign: "center",
            py: 0.2,
            mx: 0,
            my: 0.5,
            color: "#000",
          }}
        >
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
}
