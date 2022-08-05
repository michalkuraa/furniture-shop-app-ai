package shop.app.rest_api.order;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import shop.app.rest_api.address.Address;
import shop.app.rest_api.address.AddressDTO;
import shop.app.rest_api.basket.BasketDTO;
import shop.app.rest_api.product.ProductDTO;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/orders")
public class OrderController {

    private OrderService orderService;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<OrderDTO> createOrder(@RequestBody BasketDTO basket) {
        OrderDTO order = orderService.createOrder(basket);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<OrderDTO>> findAllOrdersOfCurrentUser() {
        List<OrderDTO> orders = orderService.findAllOrdersOfCurrentUser();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{id}")
    public ResponseEntity<OrderDTO> findOrdersById(@PathVariable long id) {
        OrderDTO order = orderService.findOrderDTOById(id);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(method = RequestMethod.GET, path = "/users/{id}")
    public ResponseEntity<List<OrderDTO>> findOrdersByUsername(@PathVariable long id) {
        List<OrderDTO> orders = orderService.findAllOrdersByUserId(id);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

}
