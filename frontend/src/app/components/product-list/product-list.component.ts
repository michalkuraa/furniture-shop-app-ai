import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';
import { CategoryService } from 'src/app/service/category.service';
import { BrandService } from 'src/app/service/brand.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProgressSpinnerDialogComponent } from '../progress-spinner-dialog/progress-spinner-dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: ProductDTO[];
  productsToShow: ProductDTO[];
  categories: string[] = [];
  brands: string[] = [];
  category: string = "";
  brand: string = "";
  productsLoaded: Promise<boolean>;

  constructor(private productService: ProductService, private categoryService: CategoryService, private brandService: BrandService, private dialog: MatDialog) { }

  ngOnInit() {
    let dialogRef: MatDialogRef<ProgressSpinnerDialogComponent> = this.dialog.open(ProgressSpinnerDialogComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
    this.productService.findAllProducts().subscribe(products => {
      this.products = products;
      this.productsToShow = this.products.slice(0,10);
      this.productsLoaded = Promise.resolve(true);
      dialogRef.close();
    });
    this.categoryService.findAllCategories().subscribe(categories => {
      categories.forEach(category => {
        this.categories.push(category.name);
      })
    });
    this.brandService.findAllBrands().subscribe(brands => {
      brands.forEach(brand => {
        this.brands.push(brand.name);
      })
    })
  }

  onPageChange($event) {
    this.productsToShow = this.products.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
  }

  filterProducts() {
    if (this.category !== "") {
      this.productsToShow = this.products.filter(
        product => {
          return product.category === this.category;
        }
      );
    }

    if (this.brand !== "") {
      this.productsToShow = this.products.filter(
        product => {
          return product.brand === this.brand;
        }
      );
    }
  }

  resetFilters() {
    this.brand = "";
    this.category = "";
    this.productsToShow = this.products.slice(0,10);
  }


}
