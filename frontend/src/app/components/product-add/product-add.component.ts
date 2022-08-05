import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PictureDTO } from 'src/app/model/picture.model';
import { PictureService } from 'src/app/service/picture.service';
import { CategoryService } from 'src/app/service/category.service';
import { BrandService } from 'src/app/service/brand.service';
import { AddProductDTO } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';
import { ProgressSpinnerDialogComponent } from '../progress-spinner-dialog/progress-spinner-dialog.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  form: FormGroup;
  file: File = null;
  picture: PictureDTO;
  categories: string[] = [];
  brands: string[] = [];
  price: number;
  quantity: number;
  category: string;
  brand: string;
  name: string;
  description: string;
  product: AddProductDTO;
  categoryControl = new FormControl();
  filteredCategories: Observable<string[]>;
  brandControl = new FormControl();
  filteredBrands: Observable<string[]>;

  constructor(private formBuilder: FormBuilder, private pictureService: PictureService, private categoryService: CategoryService, 
    private brandService: BrandService, private productService: ProductService, private dialog: MatDialog, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    let dialogRef: MatDialogRef<ProgressSpinnerDialogComponent> = this.dialog.open(ProgressSpinnerDialogComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
    this.createForm();
    this.categoryService.findAllCategories().subscribe(categories => {
      categories.forEach(category => {
        this.categories.push(category.name);
        dialogRef.close();
      });
      this.filteredCategories = this.categoryControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterCategories(value))
      );
    });
    this.brandService.findAllBrands().subscribe(brands => {
      brands.forEach(brand => {
        this.brands.push(brand.name);
      });
      this.filteredBrands = this.brandControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterBrands(value))
      );
    });
  }

  _filterCategories(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.categories.filter(option => option.toLowerCase().includes(filterValue));
  }

  _filterBrands(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.brands.filter(option => option.toLowerCase().includes(filterValue));
  }

  createForm() {
    this.form = this.formBuilder.group({
      file_upload: null
    });
  }

  fileChange(event: any) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  upload(id: number) {
    let dialogRef: MatDialogRef<ProgressSpinnerDialogComponent> = this.dialog.open(ProgressSpinnerDialogComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
    let body = new FormData();
    body.append("file", this.file);
    this.pictureService.uploadPicture(body, id)
      .subscribe(
        (data) => { 
          this.picture = data; 
          dialogRef.close(); 
          this.showSnackbar("Produkt dodany", "OK");
          this.router.navigate(['admin']) 
        },
        error => console.log(error),
        () => { console.log("completed") }
      );
  }

  showSnackbar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  addProduct() {
    this.product = {
      name: this.name,
      description: this.description,
      price: this.price,
      quantity: this.quantity,
      category: this.category,
      brand: this.brand,
      picture: "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"
    }

    this.productService.addProduct(this.product).subscribe(product => {
      if (this.file !== null) {
        this.upload(product.id);
      } else {
        this.showSnackbar("Produkt dodany", "OK");
        this.router.navigate(['admin']);
      }
    })

  }

}
