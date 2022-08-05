package shop.app.rest_api.order;

import lombok.AllArgsConstructor;
import lombok.Data;
import shop.app.rest_api.address.AddressDTO;
import shop.app.rest_api.product.ProductDTO;
import shop.app.rest_api.user.UserDTO;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
public class OrderDTO {

    private long id;
    private Double sum;
    private Date orderDate;
    private UserDTO user;
    private AddressDTO address;
    private List<ProductDTO> products;

    public OrderDTO(Order order) {

        List<ProductDTO> productDTOs = new ArrayList<>();

        order.getProducts().forEach( product -> {
            productDTOs.add(new ProductDTO(product));
        });

        this.id = order.getId();
        this.sum = order.getSum();
        this.orderDate = order.getOrderDate();
        this.address = new AddressDTO(order.getAddress());
        this.user = new UserDTO(order.getUser());
        this.products = productDTOs;
    }
}
