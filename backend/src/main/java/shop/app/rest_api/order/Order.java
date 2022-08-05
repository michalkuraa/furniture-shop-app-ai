package shop.app.rest_api.order;
import lombok.Data;
import lombok.NoArgsConstructor;
import shop.app.rest_api.address.Address;
import shop.app.rest_api.address.AddressDTO;
import shop.app.rest_api.product.Product;
import shop.app.rest_api.user.User;
import javax.persistence.*;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@Data
@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private Double sum;

    @Column
    private Date orderDate;

    @ManyToOne
    private User user;

    @OneToOne
    private Address address;

    @ManyToMany
    private List<Product> products;

    public Order(Double sum, Date orderDate, User user, Address address, List<Product> products) {
        this.sum = sum;
        this.orderDate = orderDate;
        this.user = user;
        this.address = address;
        this.products = products;
    }
}
