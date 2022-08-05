package shop.app.rest_api.product;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/products")
public class ProductController {

    private ProductService productService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<ProductDTO>> findAllProducts() {
        List<ProductDTO> products = productService.findAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }


    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(method = RequestMethod.POST, path = "/add")
    public ResponseEntity<ProductDTO> addProduct(@RequestBody ProductDTO productDTO) {
        ProductDTO product = productService.addProduct(productDTO);

        return new ResponseEntity<>(product, HttpStatus.OK);
    }

}
