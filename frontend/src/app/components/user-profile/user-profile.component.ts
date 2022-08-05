import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { UserDTO } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {


  user: UserDTO;
  dataLoaded: Promise<boolean>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getCurrentUserInfo().subscribe(user => {
      this.user = user;
      this.dataLoaded = Promise.resolve(true);
    })
  }

}
