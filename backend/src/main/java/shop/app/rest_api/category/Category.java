package shop.app.rest_api.category;

import lombok.Data;
import lombok.NoArgsConstructor;
import shop.app.rest_api.product.Product;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
@Entity
@Table(name="categories")
@NoArgsConstructor
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank
    private String name;

    @OneToMany(mappedBy = "category")
    private List<Product> products;

    public Category(@NotBlank String name) {
        this.name = name;
    }
}
