import SidebarList from "../../../utility/SidebarList/SidebarList";

export default function AdminSidebar() {
  const list = [
    { id: 1, text: "ادارة الطلبات", to: "allorders" },
    { id: 2, text: "ادارة المنتجات", to: "allproducts" },
    { id: 3, text: "اضف ماركة", to: "addbrand" },
    { id: 4, text: "اضف تصنيف", to: "addcategory" },
    { id: 5, text: "اضف تصنيف فرعي", to: "addsubcategory" },
    { id: 6, text: "اضف منتج", to: "addproduct" },
    { id: 7, text: "اضف كوبون", to: "addcoupon" },
  ];

  return <SidebarList list={list} />;
}
