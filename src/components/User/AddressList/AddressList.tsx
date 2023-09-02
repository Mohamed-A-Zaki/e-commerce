import { useAppSelector } from "../../../store/hooks";
import AddressCard from "../AddressCard/AddressCard";

export default function AddressList() {
  const { addresses } = useAppSelector((state) => state.Address);

  return addresses.map((address) => {
    return <AddressCard key={address._id} {...address} />;
  })
}
