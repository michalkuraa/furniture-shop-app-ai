package shop.app.rest_api.order;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import shop.app.rest_api.address.Address;
import shop.app.rest_api.address.AddressDTO;
import shop.app.rest_api.address.AddressService;
import shop.app.rest_api.basket.BasketDTO;
import shop.app.rest_api.product.Product;
import shop.app.rest_api.product.ProductDTO;
import shop.app.rest_api.product.ProductService;
import shop.app.rest_api.user.User;
import shop.app.rest_api.user.UserService;

import java.util.*;

@AllArgsConstructor
@Service
public class OrderService {

    private OrderRepository orderRepository;
    private AddressService addressService;
    private ProductService productService;
    private UserService userService;

    public OrderDTO createOrder(BasketDTO basket) {

        double sum = 0;

        List<ProductDTO> productDTOs = basket.getProducts();
        Address address = basket.getAddress();
        addressService.saveAddress(address);
        ListIterator<ProductDTO> iterator = productDTOs.listIterator();

        while(iterator.hasNext()) {
            ProductDTO product = iterator.next();
            sum += product.getPrice();
            productService.decreaseQuantityOfProduct(product.getId());
        }

        List<Product> products = new ArrayList<>();
        productDTOs.forEach(productDTO -> {
            products.add(productService.findProductById(productDTO.getId()));
        });

        User currentUser = userService.findCurrentUser();

        Order order = new Order(sum, new Date(), currentUser, address, products);
        OrderDTO orderDTO = new OrderDTO(order);

        orderRepository.save(order);

        return orderDTO;
    }

    public List<OrderDTO> findAllOrdersOfCurrentUser() {

        User currentUser = userService.findCurrentUser();

        List<OrderDTO> orderDTOs = new ArrayList<>();
        List<Order> orders = orderRepository.findAllByUserUsername(currentUser.getUsername());

        orders.forEach(order -> {
            orderDTOs.add(new OrderDTO(order));
        });

        return orderDTOs;
    }

    public List<OrderDTO> findAllOrdersByUserId(long id) {

        List<Order> orders = orderRepository.findAllByUserId(id);
        List<OrderDTO> orderDTOs = new ArrayList<>();

        orders.forEach(order -> {
            orderDTOs.add(new OrderDTO(order));
        });

        return orderDTOs;
    }


    public Order findOrderById(long id) {
        Order order = orderRepository.findById(id).orElseThrow(
                () -> new NoSuchElementException("Nie znaleziono zamówienia o podanym id")
        );

        return order;
    }

    public OrderDTO findOrderDTOById(long id) {
        Order order = findOrderById(id);
        OrderDTO orderDTO = new OrderDTO(order);

        return orderDTO;
    }

}
