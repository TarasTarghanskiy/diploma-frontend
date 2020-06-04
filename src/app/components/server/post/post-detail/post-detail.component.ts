import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PostService} from '../../../../services/post/post.service';
import {first} from 'rxjs/operators';
import {AuthService} from '../../../../services/auth/auth.service';
import {ServerService} from '../../../../services/server/server.service';
import {ReportFormComponent} from '../../../report-form/report-form.component';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: any;
  constructor(
    private router: Router,
    private postService: PostService,
    private auth: AuthService,
    private serverService: ServerService
  ) { }

  ngOnInit(): void {
    this.postService.getPostByPostID(Number.parseInt(this.router.url.split('/')[4], 10))
      .pipe(first())
      .subscribe(resp => {
        this.post = resp;
      });
  }

  get isUserAuthenticated() {
    if (this.auth.isAuthenticated()) {
      return this.serverService.isUserAuthenticated;
    }
    return false;
  }
}
