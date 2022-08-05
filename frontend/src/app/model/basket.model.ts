import { ProductDTO } from './product.model';
import { AddressDTO } from './address.model';

export interface BasketDTO {
    products: ProductDTO[];
    address: AddressDTO;
}