package shop.app.rest_api.picture;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PictureDTO {

    private long id;
    private String path;

    public PictureDTO(Picture picture) {
        this.id = picture.getId();
        this.path = picture.getPath();
    }

}
