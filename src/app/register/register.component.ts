import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from '../_services/Authentication.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();


  constructor(private authService: AuthenticationService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Registration successful');
    }, error => {
      console.log(error)
      this.alertify.error(error);
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
