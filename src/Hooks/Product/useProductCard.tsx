import { toast } from "react-toastify";
import {
  addToWishList,
  removeFromWishList,
} from "../../store/WishList/WishListSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const useProductCard = (_id: string) => {
  const dispatch = useAppDispatch();
  const { wish_list_ids } = useAppSelector((state) => state.WishList);

  const handleAddToWishList = () => {
    dispatch(addToWishList(_id))
      .unwrap()
      .then(() => {
        toast.success("تم اضافة المنتج الى المفضلة");
      })
      .catch(() => {
        toast.error("فشل في اضافة المنتج الى المفضلة");
      });
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
