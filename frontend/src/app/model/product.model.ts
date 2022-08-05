export interface ProductDTO {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
    brand: string;
    picture: string;
}

export interface AddProductDTO {
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
    brand: string;
    picture: string;
}