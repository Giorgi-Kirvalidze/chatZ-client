import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  template: `
    <form (submit)="login()">
      <input type="email" [(ngModel)]="email" name="email" required>
      <input type="password" [(ngModel)]="password" name="password" required>
      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  async login() {
    try {
      this.authService.login(this.email, this.password).subscribe((user) => {
        console.log(user)
      }, (err) => {
        console.log(err)
      });
    } catch (error) {
      console.error(error);
    }
  }
}
