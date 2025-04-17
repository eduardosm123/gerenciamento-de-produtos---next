import { getProductById } from "@/api/products";
import { setProduct } from "@/redux/productSlice";
import { setError, setLoading } from "@/redux/fetchSlice";
import {
  IProductApiResponseGetById,
  IProductData,
} from "@/Types/Products";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useFetchProduct(id: number) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function get() {
      dispatch(setLoading(true));
      dispatch(setError(""));

      try {
        const response = await getProductById(id);
        const productData = response as IProductApiResponseGetById;

         

        if (productData && productData.status === 200 && productData.data) {
          const product: IProductData = {
            id: productData.data.id,
            category_id: productData.data.category_id,
            description: productData.data.description,
            image_url: productData.data.image_url,
            name: productData.data.name,
            price: productData.data.price,
            access_key_id: productData.data.access_key_id ?? 0,
          };

          dispatch(setProduct(product));
        }

        return productData;
      } catch (error) {
        console.log(error);
        dispatch(
          setError(
            "Erro: Ocorreu um erro durante a busca de informações do produto"
          )
        );
      }
    }

    get();
  }, [dispatch, id]);
}
