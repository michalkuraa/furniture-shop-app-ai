import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { OrderDTO } from 'src/app/model/order.model';
import { ProductDTO } from 'src/app/model/product.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProgressSpinnerDialogComponent } from '../progress-spinner-dialog/progress-spinner-dialog.component';

@Component({
  selector: 'app-order-product-list',
  templateUrl: './order-product-list.component.html',
  styleUrls: ['./order-product-list.component.scss']
})
export class OrderProductListComponent implements OnInit {

  orderId: number;
  order: OrderDTO;
  products: ProductDTO[];

  dataLoaded: Promise<boolean>;

  constructor(private orderService: OrderService, private dialog: MatDialog) { }

  ngOnInit() {
    let dialogRef: MatDialogRef<ProgressSpinnerDialogComponent> = this.dialog.open(ProgressSpinnerDialogComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
    this.orderService.currentOrderId.subscribe(orderId => {
      this.orderId = orderId;
      this.orderService.findOrdersById(this.orderId).subscribe(
        order => {
          this.order = order;
          this.dataLoaded = Promise.resolve(true);
          dialogRef.close();
        })
    });
  }

}
