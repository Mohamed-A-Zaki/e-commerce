import { toast } from "react-toastify";
import {
  addToWishList,
  removeFromWishList,
} from "../../store/WishList/WishListSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";

const useProductCard = (_id: string) => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { token, user } = useAppSelector((state) => state.Auth);
  const { wish_list_ids } = useAppSelector((state) => state.WishList);

  const handleAddToWishList = () => {
    if (!token) {
      navigate("/login");
    } else if (user.role === "admin") {
      toast.error("غير مسموح للادمن بالاضافة الى المفضلة");
    } else {
      dispatch(addToWishList(_id))
        .unwrap()
        .then(() => {
          toast.success("تم اضافة المنتج الى المفضلة");
        })
        .catch(() => {
          toast.error("فشل في اضافة المنتج الى المفضلة");
        });
    }
  };

  const handleRemoveFromWishList = () => {
    dispatch(removeFromWishList(_id))
      .unwrap()
      .then(() => {
        toast.success("تم حذف المنتج من المفضلة");
      })
      .catch(() => {
        toast.error("فشل في حذف المنتج من المفضلة");
      });
  };

  return { handleAddToWishList, handleRemoveFromWishList, wish_list_ids };
};

export default useProductCard;
