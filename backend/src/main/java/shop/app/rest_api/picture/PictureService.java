package shop.app.rest_api.picture;
import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import shop.app.rest_api.product.Product;
import shop.app.rest_api.product.ProductService;

import java.io.*;
import java.nio.file.Files;
import java.util.Map;

@Service
public class PictureService {

    private PictureRepository pictureRepository;
    private ProductService productService;


    @Value("${cloudinary.cloud.name}")
    private String cloudinaryCloudName;
    @Value("${cloudinary.api.key}")
    private String cloudinaryApiKey;
    @Value("${cloudinary.api.secret}")
    private String cloudinaryApiSecret;


    public PictureService(PictureRepository pictureRepository, ProductService productService) {
        this.pictureRepository = pictureRepository;
        this.productService = productService;
    }

    public PictureDTO uploadPicture(MultipartFile multipartFile, long productId) {
        PictureDTO pictureDTO = new PictureDTO();
        Picture picture;
        Product product = productService.findProductById(productId);

        Cloudinary cloudinary = new Cloudinary(ObjectUtils.asMap(
                "cloud_name", cloudinaryCloudName,
                "api_key", cloudinaryApiKey,
                "api_secret", cloudinaryApiSecret
        ));

        String path = "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

        try {
            File file = convertMultipartToFile(multipartFile);
            Map imageUploadResult = cloudinary.uploader().upload(file, ObjectUtils.emptyMap());
            path = imageUploadResult.get("url").toString();
            if (product.getPicture()!=null) {
                picture = product.getPicture();
                picture.setPath(path);
            } else {
                picture = new Picture(path, product);
            }
            pictureRepository.save(picture);
            file.delete();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("There is a problem with file");
        }
        pictureDTO.setPath(path);

        return pictureDTO;
    }



    private File convertMultipartToFile(MultipartFile file) throws IOException {
        File convertedFile = new File(file.getOriginalFilename());
        FileOutputStream fileOutputStream = new FileOutputStream(convertedFile);
        fileOutputStream.write(file.getBytes());
        fileOutputStream.close();
        return convertedFile;
    }

    public void savePicture(Picture picture) {
        pictureRepository.save(picture);
    }

}
