import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/Authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  model: any = {};
  localStorageAccessTokenName: string = 'access_token';

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(data => {
      console.log('logged in successfully');
    }, error => {
      console.log('failed to log in');
    });
  }

  logout() {
    this.authService.userToken = null;
    localStorage.removeItem(this.localStorageAccessTokenName);
    console.log('logged out');
  }

  loggedIn() {
    const token = localStorage.getItem(this.localStorageAccessTokenName);
    return !!token;
  }
}
