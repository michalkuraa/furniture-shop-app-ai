package shop.app.rest_api.address;

import lombok.Data;
import shop.app.rest_api.order.Order;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@Entity
@Table(name="addresses")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    private String city;

    @Column
    private String postcode;

    @Column
    private String street;

    @NotNull
    private int streetNumber;

    @Column
    private int localNumber;

    @OneToOne
    private Order order;

}
