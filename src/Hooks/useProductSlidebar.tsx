import { useEffect } from "react";
import {
  addBrand,
  addCategory,
  removeBrand,
  removeCategory,
} from "../store/FilterProductObjectSlice/FilterProductObjectSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { BrandType } from "../types/Brand/Brand.type";
import { CategoryType } from "../types/Category/Category.type";

const useProductSlidebar = () => {
  const dispatch = useAppDispatch();
  const { brands } = useAppSelector((state) => state.Brands);
  const { categories } = useAppSelector((state) => state.Categories);


  useEffect(() => {
    // dispatch()
  }, [])

  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    ele: CategoryType
  ) => {
    if (e.target.checked) {
      dispatch(addCategory(ele._id));
    } else {
      dispatch(removeCategory(ele._id));
    }
  };

  const handleBrandChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    ele: BrandType
  ) => {
    if (e.target.checked) {
      dispatch(addBrand(ele._id));
    } else {
      dispatch(removeBrand(ele._id));
    }
  };

  return { brands, categories, handleBrandChange, handleCategoryChange };
};

export default useProductSlidebar;
