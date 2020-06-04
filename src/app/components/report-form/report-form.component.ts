import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import {ServerService} from '../../services/server/server.service';
import {LawService} from '../../services/law/law.service';
import {Observable} from 'rxjs';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit {
@Input() postID;
  @Input() commentID;
  constructor(
    private router: Router,
    private auth: AuthService,
    private serverService: ServerService,
    private lawService: LawService
  ) {
  }

  list: {lawID: number, lawText: string, check: boolean}[] = [];
  currentPage: number;
  pageList: any;

  ngOnInit(): void {
    console.log('postID ' + this.postID);
    console.log('commentID ' + this.commentID);
    this.changePage(this.currentPage);
  }

  changePage(page: number) {
    this.currentPage = page === undefined ? 0 : page;
    this.lawService.getList(this.currentPage, this.serverID).pipe(first()).subscribe(resp => {
      for (const respObj of resp) {
        this.list.push(Object.assign(respObj, {check: false}));
      }
    });
    this.pageList = this.lawService.getPageCountList(this.currentPage, this.serverID);
  }

  get serverID() {
    return this.router.url.split('/')[2];
  }

  send() {
    console.log(this.list.filter(e => e.check === true));
    if (this.commentID === undefined) {
      this.serverService.sendReportsByPost(this.list.filter(e => e.check === true), this.postID).pipe(first()).subscribe();
    } else {
      this.serverService.sendReportsByComment(this.list.filter(e => e.check === true), this.commentID).pipe(first()).subscribe();
    }
  }
}
