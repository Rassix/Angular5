import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/Authentication.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  model: any = {};
  localStorageAccessTokenName = 'access_token';

  constructor(public authService: AuthenticationService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(data => {
      this.alertify.success('logged in successfully');
    }, error => {
      console.log(error)
      this.alertify.error(error);
    });
  }

  logout() {
    this.authService.userToken = null;
    localStorage.removeItem(this.localStorageAccessTokenName);
    this.alertify.message('logged out');
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
}
