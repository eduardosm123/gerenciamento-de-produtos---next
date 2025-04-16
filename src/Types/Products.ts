

export type Product = {
    name: string,
    description: string,
    price: number,
    image_url: string,
    category_id: number
}


export interface ProductApiResponse {
    status: number,
    response?: {
        data: string
    }
}