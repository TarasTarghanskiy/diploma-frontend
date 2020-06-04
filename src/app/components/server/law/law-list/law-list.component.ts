import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../../services/auth/auth.service';
import {ServerService} from '../../../../services/server/server.service';
import {TermService} from '../../../../services/term/term.service';
import {Observable} from 'rxjs';
import {LawService} from '../../../../services/law/law.service';

@Component({
  selector: 'app-law-list',
  templateUrl: './law-list.component.html',
  styleUrls: ['./law-list.component.css']
})
export class LawListComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService,
    private serverService: ServerService,
    private lawService: LawService
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
    this.list = this.lawService.getList(this.currentPage, this.serverID);
    this.pageList = this.lawService.getPageCountList(this.currentPage, this.serverID);
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
