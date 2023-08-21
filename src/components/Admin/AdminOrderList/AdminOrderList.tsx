import AdminOrderItem from "../AdminOrderItem/AdminOrderItem";

export default function AdminOrderList() {
  return [...Array(4)].map((_e, indx) => {
    return <AdminOrderItem key={indx} />;
  });
}
