import {Component, OnInit} from '@angular/core';
import {ServerService} from '../../../services/server/server.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-server-detail',
  templateUrl: './server-detail.component.html',
  styleUrls: ['./server-detail.component.css']
})
export class ServerDetailComponent implements OnInit {

  constructor(
    private serverService: ServerService,
    private router: Router,
    private auth: AuthService
  ) {
  }

  ngOnInit(): void {
    this.serverService.getUserProfile(this.router.url.split('/')[2]);
  }

  get isAuthenticated() {
    return this.auth.isAuthenticated();
  }

  get isUserAuthenticated() {
    return this.serverService.isUserAuthenticated;
  }

}
