export interface IProductListItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
  category_id: number;
  access_key_id?: number;
}

export interface IListProduct {
  rows?: IProductListItem[];
  totalPages: number;
  page: number;
  filter: string;
  filterValue: string;
   
}
