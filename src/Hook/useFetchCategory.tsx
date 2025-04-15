import { getCategoryById } from "@/api/categories";
import { setCategory } from "@/redux/categorySlice";
import { setError, setLoading } from "@/redux/fetchSlice";
 
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useFetchCategory(id: number) {
  const dispatch = useDispatch();
  dispatch(setLoading(true));
  dispatch(setError(""));

  useEffect(() => {
    async function get() {
      dispatch(setLoading(true));
      dispatch(setError(""));
      try {
        const response: any = await getCategoryById(id);

        if (response && response.status === 200 && response.data) {
           
          const category = {
            id: response.data.id ? response.data.id : 0,
            name: response.data.name ? response.data.name : "",
          };
           
          dispatch(setCategory(category));
        }

        return response;
      } catch (error) {
        console.log(error);
        dispatch(
          setError(
            "Error: Ocorreu um erro durante o processo de pegar os dados da categoria de id" +
              id
          )
        );
      }
    }

    get();
  }, [dispatch, id]);
}
