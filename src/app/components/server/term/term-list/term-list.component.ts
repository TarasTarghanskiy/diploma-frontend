import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {AuthService} from '../../../../services/auth/auth.service';
import {ServerService} from '../../../../services/server/server.service';
import {Observable} from 'rxjs';
import {TermService} from '../../../../services/term/term.service';

@Component({
  selector: 'app-term-list',
  templateUrl: './term-list.component.html',
  styleUrls: ['./term-list.component.css']
})
export class TermListComponent implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthService,
    private serverService: ServerService,
    private termService: TermService
  ) {
  }
  list: Observable<any>;
  currentPage: number;
  pageList: any;


  ngOnInit(): void {
    this.changePage(this.currentPage);
  }

  changePage(page: number) {
    this.currentPage = page === undefined ? 0 : page;
    this.list = this.termService.getList(this.currentPage, this.serverID);
    this.pageList = this.termService.getPageCountList(this.currentPage, this.serverID);
  }

  get serverID() {
    return this.router.url.split('/')[2];
  }

  get isUserAuthenticated() {
    if (this.auth.isAuthenticated()) {
      return this.serverService.isUserAuthenticated;
    }
    return false;
  }
}
