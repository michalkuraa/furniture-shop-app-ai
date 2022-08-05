package shop.app.rest_api.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import shop.app.rest_api.order.Order;
import shop.app.rest_api.role.Role;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(name = "users")
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max=40)
    private String username;

    @NotBlank
    @Size(min=6)
    @JsonIgnore
    private String password;

    @NotBlank
    @Size(max=30)
    private String name;

    @NotBlank
    @Size(max=35)
    private String surname;

    @Email
    @Size(max=60)
    private String email;

    @NotBlank
    @Size(min=11, max=11)
    private String pesel;

    @DateTimeFormat
    private Date birthdate;

    @NotBlank
    private String city;

    @NotBlank
    private String postcode;

    @NotBlank
    private String street;

    @Column
    private int streetNumber;

    @Column
    private int localNumber;

    @OneToMany(mappedBy = "user")
    private List<Order> orders;

    @ManyToMany
    private Set<Role> roles;

    public User(@NotBlank @Size(max = 40) String username, @NotBlank @Size(min = 6) String password, @NotBlank @Size(max = 30) String name, @NotBlank @Size(max = 35) String surname, @Email @Size(max = 60) String email, @NotBlank @Size(min = 11, max = 11) String pesel, Date birthdate, @NotBlank String city, @NotBlank String postcode, @NotBlank String street, @NotBlank int streetNumber, @NotBlank int localNumber) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.pesel = pesel;
        this.birthdate = birthdate;
        this.city = city;
        this.postcode = postcode;
        this.street = street;
        this.streetNumber = streetNumber;
        this.localNumber = localNumber;
    }
}