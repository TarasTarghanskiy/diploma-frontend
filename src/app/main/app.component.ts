import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private r: Router,
    private auth: AuthService
  ) {
  }

  title = 'diploma-frontend';

  get isServersActive() {
    return this.r.url.includes('/server/');
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.r.navigate(['/login']);
  }

  get isAuthenticated() {
    return this.auth.isAuthenticated();
  }
}
