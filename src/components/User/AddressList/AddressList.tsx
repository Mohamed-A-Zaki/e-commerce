import AddressCard from "../AddressCard/AddressCard";

export default function AddressList() {
  return [...Array(3)].map((_ele, indx) => {
    return <AddressCard key={indx} />;
  });
}
