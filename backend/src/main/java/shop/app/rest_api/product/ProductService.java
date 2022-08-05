package shop.app.rest_api.product;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import shop.app.rest_api.brand.Brand;
import shop.app.rest_api.brand.BrandService;
import shop.app.rest_api.category.Category;
import shop.app.rest_api.category.CategoryService;
import shop.app.rest_api.picture.Picture;
import shop.app.rest_api.picture.PictureService;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ProductService {

    private ProductRepository productRepository;
    private CategoryService categoryService;
    private PictureService pictureService;
    private BrandService brandService;

    public ProductService(ProductRepository productRepository, CategoryService categoryService, @Lazy PictureService pictureService, BrandService brandService) {
        this.productRepository = productRepository;
        this.categoryService = categoryService;
        this.pictureService = pictureService;
        this.brandService = brandService;
    }

    public List<ProductDTO> findAllProducts() {
        List<Product> products = productRepository.findAll();
        List<ProductDTO> productDTOs = new ArrayList<>();

        products.forEach(product -> {
            productDTOs.add(new ProductDTO(product));
        });

        return productDTOs;
    }

    public Product findProductById(long id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Produkt nieznaleziony"));

        return product;
    }

    public void decreaseQuantityOfProduct(long id) {
        Product product = findProductById(id);
        int oldQuantity = product.getQuantity();
        int newQuantity = oldQuantity - 1;
        product.setQuantity(newQuantity);

        productRepository.save(product);
    }

    public ProductDTO addProduct(ProductDTO productDTO) {
        Category category = null;
        Brand brand = null;
        try {
            category = categoryService.findCategoryByName(productDTO.getCategory());
        } catch (NoSuchElementException e) {
            category = categoryService.addCategory(productDTO.getCategory());
        }

        try {
            brand = brandService.findBrandByName(productDTO.getBrand());
        } catch (NoSuchElementException e) {
            brand = brandService.addBrand(productDTO.getBrand());
        }
        Picture picture = new Picture(productDTO.getPicture());
        pictureService.savePicture(picture);
        Product product = new Product(productDTO.getName(), productDTO.getDescription(), productDTO.getPrice(), productDTO.getQuantity(), category, brand, picture);
        productRepository.save(product);

        ProductDTO returnProduct = new ProductDTO(product);

        return returnProduct;
    }

}
