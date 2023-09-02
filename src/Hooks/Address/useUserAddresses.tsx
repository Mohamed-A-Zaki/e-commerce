import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { useEffect } from "react";
import { getAddresses } from "../../store/AddressSlice/AddressSlice";

const useUserAddresses = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);

  const handleClick = () => {
    navigate("/user/add-address");
  };

  return { handleClick };
};

export default useUserAddresses;
