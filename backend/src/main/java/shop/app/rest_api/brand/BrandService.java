package shop.app.rest_api.brand;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
@AllArgsConstructor
public class BrandService {

    private BrandRepository brandRepository;

    public List<BrandDTO> findAllBrands() {
        List<Brand> brands = brandRepository.findAll();
        List<BrandDTO> brandDTOs = new ArrayList<>();
        brands.forEach(brand -> brandDTOs.add(new BrandDTO(brand.getId(), brand.getName())));

        return brandDTOs;
    }

    public Brand findBrandByName(String name) {
        Brand brand = brandRepository.findByName(name)
                .orElseThrow(() -> {
                    throw new NoSuchElementException("Nie znaleziono podanej marki");
                });

        return brand;
    }

    public Brand addBrand(String name) {
        Brand brand = new Brand(name);
        brandRepository.save(brand);

        return brand;
    }

}
