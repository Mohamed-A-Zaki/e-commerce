import SidebarList from "../../../utility/SidebarList/SidebarList";

export default function UserSidebar() {
  const list = [
    { id: 1, text: "ادارة الطلبات", to: "allorders" },
    { id: 2, text: "المنتجات المفضلة", to: "favoriteproducts" },
    { id: 3, text: "العناوين الشخصية", to: "addresses" },
    { id: 4, text: "الملف الشخصي", to: "profile" },
  ];

  return <SidebarList list={list} />;
}
