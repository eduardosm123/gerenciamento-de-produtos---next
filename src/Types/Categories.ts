export type CategoryItemList = {
  id: number;
  name: string;
  access_key_id?: number;
};


export type CategoryPost = {
  name: string
}

export interface CategoryApiResponse {
  status: number,
  data?: CategoryData;
}

export interface CategoryData {
  id?: number,
  name?: string
}

export interface Category {
  id: number,
  name: string
}