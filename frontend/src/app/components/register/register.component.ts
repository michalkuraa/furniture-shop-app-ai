import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, Validators } from '@angular/forms';
import { ProgressSpinnerDialogComponent } from 'src/app/components/progress-spinner-dialog/progress-spinner-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog, private authService: AuthService) { }

  ngOnInit() {
  }

  public errorMsg;
  username: string = '';
  password: string = '';
  name: string = '';
  surname: string = '';
  email: string = '';
  pesel: string = '';
  birthdate: Date;
  city: string = '';
  postcode: number;
  street: string;
  streetNumber: number;
  localNumber: number;
  roles = ['ROLE_USER'];
  maxDate: Date = new Date(2001, 1, 1);

  matcher = new ErrorStateMatcher();

  usernameFormControl = new FormControl('', [
    Validators.required
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  surnameFormControl = new FormControl('', [
    Validators.required
  ]);

  emailFormControl = new FormControl('', [
    Validators.required
  ])

  birthdateFormControl = new FormControl('', [
    Validators.required
  ])

  peselFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(11),
    Validators.maxLength(11)
  ]);

  cityFormControl = new FormControl('', [
    Validators.required
  ]);

  postcodeFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(5)
  ])

  streetNumberFormControl = new FormControl('', [
    Validators.required
  ])

  register(): void {
    let dialogRef: MatDialogRef<ProgressSpinnerDialogComponent> = this.dialog.open(ProgressSpinnerDialogComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
    this.authService.register(this.username, this.password, this.name, this.surname, this.email, this.pesel,
      this.birthdate, this.city, this.postcode, this.street, this.streetNumber, this.localNumber, this.roles).subscribe(
      data => {
        dialogRef.close();
        this.router.navigate(['login']);
      },
      error => {
        this.errorMsg = error;
        dialogRef.close();
      }
    );
  }

}
