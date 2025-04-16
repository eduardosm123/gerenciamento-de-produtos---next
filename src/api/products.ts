 
import { Product } from "@/Types/Products";
import axios from "axios";

const accessKey = process.env.NEXT_PUBLIC_API_KEY;

export const getProduct = async (page: number, filter: string, typeFilter: string) => {
  try {
    
    const response = await axios.get(
      `/api-proxy/products?${typeFilter}=${filter}&limit=5&offset=${page}`,
      {
        headers: {
          "Access-Key": accessKey,
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};


export const postProduct = async(product: Product) => {
  try {
    const response = await axios.post(`/api-proxy/products`, product, {
      headers: {
        "Access-Key": accessKey,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}


export const deleteProduct = async (id: number) => {
  try {
    const response = await axios.delete(`/api-proxy/products/${id}`, {
      headers: {
        "Access-Key": accessKey,
      },
    });
    console.log(response)
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};