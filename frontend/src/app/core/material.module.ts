import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule, 
  MatDatepickerModule, MatNativeDateModule, MatGridListModule, MatIconModule, MatDividerModule, MatListModule, MatSnackBarModule, 
MatMenuModule, MatSelectModule, MatPaginatorModule, MatProgressSpinnerModule, MatSidenavModule, MatExpansionModule, MatStepperModule, MatSnackBarModule, MatAutocompleteModule, MatBadgeModule, MatPaginatorModule],
  exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule, 
  MatDatepickerModule, MatNativeDateModule, MatGridListModule, MatIconModule, MatDividerModule, MatListModule, MatSnackBarModule, 
MatMenuModule, MatSelectModule, MatPaginatorModule, MatProgressSpinnerModule, MatSidenavModule, MatExpansionModule, MatStepperModule, MatSnackBarModule, MatAutocompleteModule, MatBadgeModule, MatPaginatorModule],
})
export class CustomMaterialModule { }