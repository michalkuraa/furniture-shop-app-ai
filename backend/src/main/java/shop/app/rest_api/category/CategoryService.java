package shop.app.rest_api.category;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
@AllArgsConstructor
public class CategoryService {

    private CategoryRepository categoryRepository;

    public List<CategoryDTO> findAllCategories() {
        List<Category> categories = categoryRepository.findAll();
        List<CategoryDTO> categoryDTOs = new ArrayList<>();
        categories.forEach(category -> categoryDTOs.add(new CategoryDTO(category.getId(), category.getName())));

        return categoryDTOs;
    }

    public Category findCategoryByName(String name) {
        Category category = categoryRepository.findByName(name)
                .orElseThrow(() -> {
                    throw new NoSuchElementException("Nie znaleziono podanej kategorii");
                });

        return category;
    }

    public Category addCategory(String name) {
        Category category = new Category(name);
        categoryRepository.save(category);

        return category;
    }

}
