 
import axios from "axios";

const accessKey = process.env.NEXT_PUBLIC_API_KEY;

export const getProduct = async (page: number, filter: string, filterValue: string) => {
  try {

    const response = await axios.get(
      `/api-proxy/products?${filter}=${filterValue}&limit=5&offset=${page}`,
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
