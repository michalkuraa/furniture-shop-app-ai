import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { OrderDTO } from 'src/app/model/order.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProgressSpinnerDialogComponent } from '../progress-spinner-dialog/progress-spinner-dialog.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {


  orders = new MatTableDataSource<OrderDTO>();
  displayedColumns = ['id', 'date', 'address', 'sum', 'clickhere'];

  constructor(private orderService: OrderService, private dialog: MatDialog) { }

  ngOnInit() {
    let dialogRef: MatDialogRef<ProgressSpinnerDialogComponent> = this.dialog.open(ProgressSpinnerDialogComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
    this.orderService.findAllOrdersOfCurrentUser().subscribe(
      orders => {
        this.orders.data = orders;
        dialogRef.close();
      }
    )
  }

  selectOrderId(id: number) {
    this.orderService.changeOrderId(id);
  }

}
