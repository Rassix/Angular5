import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/Authentication.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  model: any = {};
  localStorageAccessTokenName = 'access_token';

  constructor(public authService: AuthenticationService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(data => {
      this.alertify.success('logged in successfully');
    }, error => {
      this.alertify.error('Failed to login');
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  logout() {
    this.authService.userToken = null;
    localStorage.removeItem(this.localStorageAccessTokenName);
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
}
