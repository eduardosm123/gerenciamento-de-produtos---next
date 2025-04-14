// Exemplo - NÃO recomendado se puder usar a Opção A
import { CategoryPost } from "@/Types/Categories";
import axios from "axios";

const accessKey = process.env.NEXT_PUBLIC_API_KEY;

export const getCategories = async (page: number) => {
  try {
    // Chama o proxy local em vez da URL direta
    const response = await axios.get(
      `/api-proxy/categories?offset=${page}&limit=5`,
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

export const postCategory = async (category: CategoryPost) => {
  try {
    const response = await axios.post(
      `/api-proxy/categories`,
     category,
     {
      headers: {
        "Access-Key": accessKey,
      },
    }
    );

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
