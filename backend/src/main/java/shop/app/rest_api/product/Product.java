package shop.app.rest_api.product;

import lombok.Data;
import lombok.NoArgsConstructor;
import shop.app.rest_api.brand.Brand;
import shop.app.rest_api.category.Category;
import shop.app.rest_api.order.Order;
import shop.app.rest_api.picture.Picture;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@NoArgsConstructor
@Data
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    private String name;

    @Column
    private String description;

    @Column
    private Double price;

    @Column
    private int quantity;

    @ManyToOne
    private Category category;

    @ManyToOne
    private Brand brand;

    @OneToOne(cascade = CascadeType.ALL)
    private Picture picture;

    public Product(@NotBlank String name, String description, Double price, int quantity, Category category, Brand brand, Picture picture) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
        this.brand = brand;
        this.picture = picture;
    }
}
