package shop.app.rest_api.brand;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/brands")
public class BrandController {

    private BrandService brandService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<BrandDTO>> findAllBrands() {
        List<BrandDTO> brands = brandService.findAllBrands();
        return new ResponseEntity<>(brands, HttpStatus.OK);
    }

}
