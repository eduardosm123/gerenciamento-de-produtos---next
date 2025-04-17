export type Product = {
  name: string;
  description: string;
  price: number;
  image_url: string;
  category_id: number;
};

export interface ProductApiResponse {
  status: number;
  response?: {
    data: Product;
  };
}

export interface IProductApiResponseGetById {
  data: IProductData;
  status: number;
}

export interface IProductData {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
  category_id: number;
  access_key_id?: number;
}
