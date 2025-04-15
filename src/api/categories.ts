 
import { ICategory } from "@/Interface/ICategory";
import { CategoryPost } from "@/Types/Categories";
import axios from "axios";

const accessKey = process.env.NEXT_PUBLIC_API_KEY;

export const getCategories = async (page: number) => {
  try {
 
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
    const response = await axios.post(`/api-proxy/categories`, category, {
      headers: {
        "Access-Key": accessKey,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteCategory = async (id: number) => {
  try {
    const response = await axios.delete(`/api-proxy/categories/${id}`, {
      headers: {
        "Access-Key": accessKey,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getCategoryById = async (id: number) => {
  try {
    const response = await axios.get(`/api-proxy/categories/${id}`, {
      headers: {
        "Access-Key": accessKey,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

 


export const patchCategory = async (category: ICategory) => {
  try {
    const response = await axios.patch(`/api-proxy/categories/${category.data.id}`, { name: category.data.name}, {
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