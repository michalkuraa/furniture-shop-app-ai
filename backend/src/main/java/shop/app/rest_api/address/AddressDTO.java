package shop.app.rest_api.address;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AddressDTO {
    private String city;
    private String postcode;
    private String street;
    private int streetNumber;
    private int localNumber;

    public AddressDTO(Address address) {
        this.city = address.getCity();
        this.postcode = address.getPostcode();
        this.street = address.getStreet();
        this.streetNumber = address.getStreetNumber();
        this.localNumber = address.getLocalNumber();
    }
}
