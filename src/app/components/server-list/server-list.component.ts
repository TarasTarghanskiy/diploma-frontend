import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ServerService} from '../../services/server/server.service';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {
  currentPage: number;
  serverList$: Observable<any>;
  pageList$: Observable<number[]>;

  constructor(
    private serverService: ServerService,
    private auth: AuthService
  ) {
  }

  ngOnInit(): void {
    this.changePage(0);
  }

  changePage(page: number) {
    this.currentPage = page === undefined ? 0 : page;
    this.serverList$ = this.serverService.getServerList(this.currentPage);
    this.pageList$ = this.serverService.getServerPageCountList(this.currentPage);
  }

  get isAuthenticated() {
    return this.auth.isAuthenticated();
  }

}
