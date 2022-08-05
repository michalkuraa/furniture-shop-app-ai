package shop.app.rest_api.picture;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/pictures")
@AllArgsConstructor
public class PictureController {

    private PictureService pictureService;

    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(method = RequestMethod.POST, value="/upload/{id}", produces = "application/json")
    public ResponseEntity<PictureDTO> uploadPicture(@RequestPart(value="file") MultipartFile file, @PathVariable long id) {
        PictureDTO picture = pictureService.uploadPicture(file, id);
        return new ResponseEntity<>(picture, HttpStatus.OK);
    }

}
