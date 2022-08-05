import { AddressDTO } from './address.model';
import { UserDTO } from './user.model';
import { ProductDTO } from './product.model';

export interface OrderDTO {
    id: number;
    sum: number;
    orderDate: Date;
    user: UserDTO;
    address: AddressDTO;
    products: ProductDTO;
}