package shop.app.rest_api.address;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class AddressService {

    private AddressRepository addressRepository;

    public void saveAddress(Address address) {
        addressRepository.save(address);
    }

}
