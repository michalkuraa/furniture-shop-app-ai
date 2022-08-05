import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { OrderDTO } from 'src/app/model/order.model';
import { OrderService } from 'src/app/service/order.service';
import { UserService } from 'src/app/service/user.service';
import { ProgressSpinnerDialogComponent } from '../progress-spinner-dialog/progress-spinner-dialog.component';

@Component({
  selector: 'app-user-order-list',
  templateUrl: './user-order-list.component.html',
  styleUrls: ['./user-order-list.component.scss']
})
export class UserOrderListComponent implements OnInit {

  userId: number;
  orders = new MatTableDataSource<OrderDTO>();
  displayedColumns = ['id', 'date', 'address', 'sum', 'clickhere'];

  constructor(private orderService: OrderService, private userService: UserService, private dialog: MatDialog) { }

  ngOnInit() {
    let dialogRef: MatDialogRef<ProgressSpinnerDialogComponent> = this.dialog.open(ProgressSpinnerDialogComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
    this.userService.currentUserId.subscribe(id => {
      this.userId = id;
      this.orderService.findAllOrdersOfUser(this.userId).subscribe(
        orders => {
          this.orders.data = orders;
          dialogRef.close();
        }
      )
    })
  }

  selectOrderId(id: number) {
    this.orderService.changeOrderId(id);
  }

}
