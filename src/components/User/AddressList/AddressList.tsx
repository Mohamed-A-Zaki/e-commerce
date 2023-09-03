import { useAppSelector } from "../../../store/hooks";
import EmptyListMessage from "../../../utility/EmptyListMessage/EmptyListMessage";
import ErrorMessage from "../../../utility/ErrorMessage/ErrorMessage";
import Loading from "../../../utility/Loading/Loading";
import AddressCard from "../AddressCard/AddressCard";

export default function AddressList() {
  const { addresses, loading, error } = useAppSelector(
    (state) => state.Address
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage>يوجد خطا ما...</ErrorMessage>;
  }

  if (addresses.length === 0) {
    return <EmptyListMessage>لا يوجد أي عناوين حاليا...</EmptyListMessage>;
  }

  return addresses.map((address) => {
    return <AddressCard key={address._id} {...address} />;
  });
}
