import { IProduct } from "@/Interface/IProduct";


export function validationProductCreate(data: IProduct) {

    return data.data 
    && data.data.name 
    && data.data.category_id 
    && data.data.description
    && data.data.image_url
    && data.data.price && data.data.category_id !== "Selecione a categoria"
}