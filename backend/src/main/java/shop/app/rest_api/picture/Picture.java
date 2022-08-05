package shop.app.rest_api.picture;

import lombok.Data;
import lombok.NoArgsConstructor;
import shop.app.rest_api.product.Product;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@NoArgsConstructor
@Data
@Entity
@Table(name = "pictures")
public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    private String path;

    @OneToOne(mappedBy = "picture")
    private Product product;

    public Picture(@NotBlank String path, Product product) {
        this.path = path;
        this.product = product;
    }

    public Picture(@NotBlank String path) {
        this.path = path;
    }
}
