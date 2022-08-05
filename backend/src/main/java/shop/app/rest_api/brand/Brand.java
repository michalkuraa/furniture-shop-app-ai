package shop.app.rest_api.brand;

import lombok.Data;
import lombok.NoArgsConstructor;
import shop.app.rest_api.product.Product;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
@Entity
@Table(name="brands")
@NoArgsConstructor
public class Brand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @NotBlank
    private String name;

    @OneToMany(mappedBy = "brand")
    private List<Product> products;

    public Brand(@NotBlank String name) {
        this.name = name;
    }
}
