import { CategoryItemList } from "@/Types/Categories";

export interface IListCategory {
  rows?: CategoryItemList[]; 
  totalPages: number,
  page: number,
}
