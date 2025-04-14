
'use client'

import { RootState } from "@/redux/store"
import { Button } from "@mui/material"
import { useSelector } from "react-redux"

 


export default function PaginationCategoryComponent() {

    const totalPage = useSelector((state: RootState)=> state.listCategories.totalPages)

    return (<div className="flex justify-between mt-[2%]">
       <Button variant="contained">Anterior</Button>
       <p>1 de {totalPage ? totalPage : ""} </p>
       <Button variant="contained">próximo</Button>
    </div>)
}