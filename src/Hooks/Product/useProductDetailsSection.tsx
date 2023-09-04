import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addProductToCart } from "../../store/CartSlice/CartSlice";
import { ProductType } from "../../types/Product/Product.type";
import { toast } from "react-toastify";

const useProductDetailsSection = (spescificProduct: ProductType | null) => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.Cart);
  const { specificBrand } = useAppSelector((state) => state.Brands);
  const { specificCategoty } = useAppSelector((state) => state.Categories);

  const [selectedColor, setSelectedColor] = useState("");

  const handleAddToCart = () => {
    dispatch(
      addProductToCart({
        color: selectedColor,
        productId: spescificProduct?._id || "",
      })
    )
      .unwrap()
      .then(() => {
        toast.success("تمت عملية الاضافة بنجاح");
      })
      .catch(() => {
        toast.error("فشلت عملية الاضافة");
      });
  };

  return {
    handleAddToCart,
    loading,
    selectedColor,
    setSelectedColor,
    specificBrand,
    specificCategoty,
  };
};

export default useProductDetailsSection;
