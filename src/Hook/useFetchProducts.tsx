import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { setError, setLoading } from "@/redux/fetchSlice";
import { getProduct } from "@/api/products";
import { setListProduct, setTotalPageProduct } from "@/redux/ListProductsSlice";

export default function useFetchProducts() {
    const dispatch = useDispatch()
    const page = useSelector((state: RootState)=> state.listProducts.page)
    const filter = useSelector((state: RootState)=> state.listProducts.filter)
    const typeFilter = useSelector((state: RootState)=> state.listProducts.typeFilter)

    useEffect(()=> {
        async function get() {
            dispatch(setLoading(true))
            dispatch(setError(""))

            try {
                const response = await getProduct((page - 1) * 5, filter, typeFilter)
                dispatch(setTotalPageProduct(Math.ceil(response?.data.count / 5)))
                dispatch(setListProduct(
                    response && response.data && response?.data.rows ? response.data.rows : []
                ));

                dispatch(setLoading(false))
            } catch (error) {
                console.log(error)
                dispatch(setError("Erro: ocorreu um erro durante a busca de produtos"))
            }
        }   

        get()
    }, [dispatch, page, filter, typeFilter])
}