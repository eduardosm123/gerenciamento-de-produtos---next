"use client";

import { setPage } from "@/redux/ListCategorySlice";
import { RootState } from "@/redux/store";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function PaginationCategoryComponent() {
  const totalPage = useSelector(
    (state: RootState) => state.listCategories.totalPages
  );
  const page = useSelector((state: RootState) => state.listCategories.page);
  const dispatch = useDispatch();

  const handlePreviousPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  const handleNextPage = () => {
    if (page < totalPage) {
      dispatch(setPage(page + 1));
    }
  };
  return (
    <div className="flex justify-between mt-[2%]">
      <Button variant="contained" onClick={(handlePreviousPage)}>Anterior</Button>
      <p>{page ? page : ""} de {totalPage ? totalPage : ""} </p>
      <Button variant="contained" onClick={handleNextPage}>próximo</Button>
    </div>
  );
}
