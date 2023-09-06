import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

const useCategoryNavbar = () => {
  const navigate = useNavigate();
  const { categories } = useAppSelector((state) => state.Categories);

  const handle_all_cat = () => {
    navigate("/allcategory");
  };

  const handle_cat = (id: string) => {
    navigate(`/products/category/${id}`);
  };

  return { categories, handle_all_cat, handle_cat };
};

export default useCategoryNavbar;
