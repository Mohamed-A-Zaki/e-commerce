import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { MenuItemStyle } from "../../../Styles/Styles";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  const list = [
    { id: 1, text: "ادارة الطلبات", to: "allorders" },
    { id: 2, text: "ادارة المنتجات", to: "allproducts" },
    { id: 3, text: "اضف ماركة", to: "addbrand" },
    { id: 4, text: "اضف تصنيف", to: "addcategory" },
    { id: 5, text: "اضف تصنيف فرعي", to: "addsubcategory" },
    { id: 6, text: "اضف منتج", to: "addproduct" },
  ];

  return (
    <List sx={{ my: 2, bgcolor: "#fff", borderRadius: 3, height: "100vh" }}>
      {list.map(({ id, text, to }) => {
        return (
          <Link key={id} to={to}>
            <ListItem
              disablePadding
              sx={{ borderBottom: 1, borderColor: "#ddd" }}
            >
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
      })}
    </List>
  );
}
