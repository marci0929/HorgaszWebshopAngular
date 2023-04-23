import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit{
  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    this.logout();
  }

  async logout() {
    this.authService.logout().then(cred => {
      this.router.navigateByUrl('/main_page');
    }).catch(error => {
      console.error(error);
    });
  }
}
