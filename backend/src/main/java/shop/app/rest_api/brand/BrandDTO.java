package shop.app.rest_api.brand;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class BrandDTO {

    private int id;
    private String name;

    public BrandDTO(Brand brand) {
        this.id = brand.getId();
        this.name = brand.getName();
    }

}
