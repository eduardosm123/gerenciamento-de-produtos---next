import { getCategories } from "@/api/categories";
import { setError, setLoading } from "@/redux/fetchSlice";
import { setList, setTotalPage } from "@/redux/ListCategorySlice";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useFetchCategories() {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.listCategories.page);
  useEffect(() => {
    async function get() {
      dispatch(setLoading(true));
      dispatch(setError(""));

      try {
        const response = await getCategories((page - 1) * 5);
        //console.log(response?.data);
        dispatch(setTotalPage(Math.ceil(response?.data.count / 5)));
        dispatch(
          setList(
            response && response.data && response.data.rows
              ? response.data.rows
              : []
          )
        );
        dispatch(setLoading(false))
      } catch (error) {
        console.log(error);
        dispatch(setError("Erro: ocorreu um erro durante o processo de busca de categorias"))
      }
    }

    get();
  }, [dispatch, page]);
}
