// Exemplo - NÃO recomendado se puder usar a Opção A
import axios from "axios";

const accessKey = process.env.NEXT_PUBLIC_API_KEY

export const getCategories = async (page: number) => {
  try {
    // Chama o proxy local em vez da URL direta
    const response = await axios.get(`/api-proxy/categories?offset=${page}&limit=10`, {
        headers: {
            "Access-Key": accessKey
        }
    })
    return response
  } catch (error) {
    console.log(error)
  }
}