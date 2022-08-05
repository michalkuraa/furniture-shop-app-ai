import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserDTO } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { OrderService } from 'src/app/service/order.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProgressSpinnerDialogComponent } from '../progress-spinner-dialog/progress-spinner-dialog.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users = new MatTableDataSource<UserDTO>();
  displayedColumns = ["id", "username", "name", "surname", "address", "orders"]

  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit() {
    let dialogRef: MatDialogRef<ProgressSpinnerDialogComponent> = this.dialog.open(ProgressSpinnerDialogComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
    this.userService.getAllUsers().subscribe(users => {
      this.users.data = users;
      dialogRef.close();
    });
  }

  selectUserId(id: number) {
    this.userService.changeUserId(id);
  }



}
