import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('usernameInput', { static: true }) usernameInput!: ElementRef;
  @ViewChild('passwordInput', { static: true }) passwordInput!: ElementRef;
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

  onLogin() {
    this.authService.login(
      this.usernameInput.nativeElement.value,
      this.passwordInput.nativeElement.value
    );

    this.router.navigate(['notes']);
  }

  onReturnHome() {
    this.router.navigate(['/']);
  }
}
