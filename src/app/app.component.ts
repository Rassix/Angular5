import { Component } from '@angular/core';
import { AuthenticationService } from './_services/Authentication.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  jwtHelper: JwtHelper = new JwtHelper();
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('access_token');
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token)
    }
    
  }
}
