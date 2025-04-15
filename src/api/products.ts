 
import axios from "axios";

const accessKey = process.env.NEXT_PUBLIC_API_KEY;

export const getProduct = async (page: number, filter: string, typeFilter: string) => {
  try {
    console.log(`/api-proxy/products?${typeFilter}=${filter}&limit=5&offset=${page}`)
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
