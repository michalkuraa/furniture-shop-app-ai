package shop.app.rest_api.product;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ProductDTO {

    private long id;
    private String name;
    private String description;
    private Double price;
    private int quantity;
    private String category;
    private String brand;
    private String picture;

    public ProductDTO(Product product) {
        this.id = product.getId();
        this.name = product.getName();
        this.description = product.getDescription();
        this.price = product.getPrice();
        this.quantity = product.getQuantity();
        this.category = product.getCategory().getName();
        this.brand = product.getBrand().getName();
        if (product.getPicture() != null) {
            this.picture = product.getPicture().getPath();
        } else {
            this.picture = "";
        }
    }

}
