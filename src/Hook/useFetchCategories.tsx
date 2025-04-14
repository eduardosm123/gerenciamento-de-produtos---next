import { getCategories } from "@/api/categories";
import { setError, setLoading } from "@/redux/fetchSlice";
import { setList, setTotalPage } from "@/redux/ListCategorySlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useFetchCategories(offset: number) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function get() {
      dispatch(setLoading(true));
      dispatch(setError(""));

      try {
        const response = await getCategories(offset);
        console.log(response?.data);
        dispatch(setTotalPage(Math.ceil(response?.data.count / 5)));
        dispatch(
          setList(
            response && response.data && response.data.rows
              ? response.data.rows
              : []
          )
        );
      } catch (error) {
        console.log(error);
      }
    }

    get();
  }, [dispatch, offset]);
}
