import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Md5 } from 'ts-md5';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router, private authService: AuthService) { }

    async login() {
      this.authService.login(this.email.value as string, Md5.hashStr(this.password.value as string)).then(cred => {
        console.log(cred);
        this.router.navigateByUrl('/main_page');
      }).catch(error => {
        console.error(error);
      });
  }

}
