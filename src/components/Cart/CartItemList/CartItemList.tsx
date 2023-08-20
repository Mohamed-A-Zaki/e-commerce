import CartItem from "../CartItem/CartItem";

export default function CartItemList() {
  return [...Array(4)].map((_e, indx) => {
    return <CartItem key={indx} />;
  });
}
