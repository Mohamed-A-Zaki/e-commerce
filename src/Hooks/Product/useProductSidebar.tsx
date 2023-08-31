import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addBrand, addCategory, removeBrand, removeCategory, setPriceFrom, setPriceTo } from "../../store/products/FilterProductObjectSlice/FilterProductObjectSlice";
import { filterProducts, getProducts } from "../../store/products/ProductSlice/ProductSlice";
import { BrandType } from "../../types/Brand/Brand.type";
import { CategoryType } from "../../types/Category/Category.type";

const useProductSidebar = () => {
  const dispatch = useAppDispatch();
  const { brands } = useAppSelector((state) => state.Brands);
  const { categories } = useAppSelector((state) => state.Categories);
  const filter_object = useAppSelector((state) => state.FilterProductObject);

  const handleGetAllProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(getProducts(1));
    } else {
      dispatch(filterProducts({ ...filter_object, page: 1 }));
    }
  };

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

  const handlePriceFromBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    dispatch(setPriceFrom(e.target.value));
  };
  const handlePriceToBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    dispatch(setPriceTo(e.target.value));
  };

  return {
    brands,
    categories,
    handleBrandChange,
    handleCategoryChange,
    handleGetAllProducts,
    handlePriceToBlur,
    handlePriceFromBlur,
    filter_object,
  };
};

export default useProductSidebar;
