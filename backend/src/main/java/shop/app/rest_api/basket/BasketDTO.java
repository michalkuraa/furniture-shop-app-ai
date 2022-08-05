package shop.app.rest_api.basket;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import shop.app.rest_api.address.Address;
import shop.app.rest_api.product.ProductDTO;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BasketDTO {

    private List<ProductDTO> products;
    private Address address;

}
