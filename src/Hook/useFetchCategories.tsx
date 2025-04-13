import { getCategories } from "@/api/categories"
import { setError, setLoading } from "@/redux/fetchSlice"
import { setList } from "@/redux/ListCategorySlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"


export default function useFetchCategories(offset: number) {

    const dispatch = useDispatch()

    useEffect(()=> {
        async function get() {
            dispatch(setLoading(true))
            dispatch(setError(""))

            try {
                const response = await getCategories(offset)
                //console.log(response)
                console.log(response?.data)
                dispatch(setList(response && response.data && response.data.rows ? response.data.rows : []))
            } catch (error) {
                console.log(error)
            }
        }

        get()
    }, [dispatch, offset])
}