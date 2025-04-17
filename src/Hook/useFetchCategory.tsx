import { getCategoryById } from "@/api/categories";
import { setCategory } from "@/redux/categorySlice";
import { setError, setLoading } from "@/redux/fetchSlice";
import { Category, CategoryApiResponse } from "@/Types/Categories";
 
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useFetchCategory(id: number) {
  const dispatch = useDispatch();
  useEffect(() => {
    async function get() {
      dispatch(setLoading(true));
      dispatch(setError(""));
      try {
        const response = await getCategoryById(id);
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
            "Error: Ocorreu um erro durante o processo de obter os dados da categoria de id" +
              id
          )
        );
      }
    }

    get();
  }, [dispatch, id]);
}