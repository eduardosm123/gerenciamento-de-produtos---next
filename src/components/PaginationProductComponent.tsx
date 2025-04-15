"use client";

import { setPageProduct } from "@/redux/ListProductsSlice";
import { RootState } from "@/redux/store";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import TextComponent from "./TextComponent";

export default function PaginationProductComponent() {
  const totalPage = useSelector(
    (state: RootState) => state.listProducts.totalPages
  );
  const page = useSelector((state: RootState) => state.listProducts.page);
  const dispatch = useDispatch();

  const handlePreviousPage = () => {
    if (page > 1) {
      dispatch(setPageProduct(page - 1));
    }
  };

  const handleNextPage = () => {
    if (page < totalPage) {
      dispatch(setPageProduct(page + 1));
    }
  };

  return (
    <div className="flex justify-between mt-[2%]">
        <Button variant="contained" onClick={(handlePreviousPage)} disabled={page === 1}><TextComponent>Anterior</TextComponent></Button>
        <p>{page ? page : ""} de {totalPage ? totalPage : ""} </p>
        <Button variant="contained" onClick={handleNextPage} disabled={page === totalPage}><TextComponent>Próximo</TextComponent></Button>
    </div>
  )
}
