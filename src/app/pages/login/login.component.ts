import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoggedIn!: boolean;
  error!: any;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((value) => {
      this.isLoggedIn = value;
    });
    this.authService.error.subscribe((value) => {
      this.error = value;
    });
  }

  onLogin(form: NgForm) {
    this.authService.login(form.value.username, form.value.password);
    this.router.navigate(['notes']);
  }

  onReturnHome() {
    this.router.navigate(['/']);
  }
}
