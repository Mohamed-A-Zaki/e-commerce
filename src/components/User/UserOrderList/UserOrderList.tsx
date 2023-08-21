import UserOrderCard from "../UserOrderCard/UserOrderCard";

export default function UserOrderList() {
  return [...Array(2)].map((_ele, indx) => {
    return <UserOrderCard key={indx} />;
  });
}
