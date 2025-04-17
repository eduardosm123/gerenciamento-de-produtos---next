import { getCategoryById } from "@/api/categories";
import { setCategory } from "@/redux/categorySlice";
import { setError, setLoading } from "@/redux/fetchSlice";
import { Category, CategoryApiResponse } from "@/Types/Categories";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function useFetchProductCategory() {
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.product.data);

  useEffect(() => {
    async function get() {
      dispatch(setLoading(true));
      dispatch(setError(""));

      try {
        const response = await getCategoryById(Number(product.category_id));
        const categoryData = response as CategoryApiResponse;

        if (categoryData && categoryData.status === 200 && categoryData.data) {
          const category: Category = {
            id: categoryData.data.id ? categoryData.data.id : 0,
            name: categoryData.data.name ? categoryData.data.name : "",
          };

          dispatch(setCategory(category));
        }
        return categoryData;
      } catch (error) {
        console.log(error);
        dispatch(
          setError(
            "Error: Ocorreu um erro durante o processo de pegar os dados da categoria de id do produto"
          )
        );
      }
    }

    get();
  }, [dispatch, product]);
}
