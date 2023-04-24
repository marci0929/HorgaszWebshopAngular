import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/shared/models/User';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Location } from '@angular/common';
import { Md5 } from 'ts-md5';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

    signUpForm = new FormGroup({
        username: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
        rePassword: new FormControl(''),
    });

    constructor(private location: Location, private authService: AuthService, private userService: UserService, private router: Router) { }

    onSubmit() {
        console.log(this.signUpForm.value);
        this.authService.signup(this.signUpForm.get('email')?.value as string, Md5.hashStr(this.signUpForm.get('password')?.value as string)).then(cred => {
          console.log(cred);
          const user: User = {
            id: cred.user?.uid as string,
            email: this.signUpForm.get('email')?.value as string,
            username: this.signUpForm.get('username')?.value as string,
            password: this.signUpForm.get('password')?.value as string
          };
          this.userService.create(user).then(_ => {
            this.router.navigateByUrl("/main_page");
          }).catch(error => {
            console.error(error);
          })
        }).catch(error => {
          console.error(error);
        });
      }

      goBack() {
        this.location.back();
      }
}
