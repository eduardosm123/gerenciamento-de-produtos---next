import { CategoryItemList } from "@/Types/Categories";

export interface IListCategory {
  rows?: CategoryItemList[];
  offset: number,
  total: number
}
