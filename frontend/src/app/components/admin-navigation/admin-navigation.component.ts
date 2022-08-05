import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorage } from 'src/app/core/token.storage';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.scss']
})
export class AdminNavigationComponent implements OnInit {

  isAdmin: boolean = false;
  roles: string[];

  constructor(private tokenStorage: TokenStorage, public router: Router) { }

  ngOnInit() {
    this.roles = this.tokenStorage.getAuthorities();
    if (this.roles.includes('ROLE_ADMIN')) {
      this.isAdmin = true;
    }
  }

}
