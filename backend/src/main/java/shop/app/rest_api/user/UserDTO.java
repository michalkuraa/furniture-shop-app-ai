package shop.app.rest_api.user;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class UserDTO {

    private Long id;
    private String username;
    private String name;
    private String surname;
    private String email;
    private String pesel;
    private Date birthdate;
    private String city;
    private String postcode;
    private String street;
    private int streetNumber;
    private int localNumber;

    public UserDTO(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.name = user.getName();
        this.surname = user.getSurname();
        this.email = user.getEmail();
        this.pesel = user.getPesel();
        this.birthdate = user.getBirthdate();
        this.city = user.getCity();
        this.postcode = user.getPostcode();
        this.street = user.getStreet();
        this.streetNumber = user.getStreetNumber();
        this.localNumber = user.getLocalNumber();
    }
}
