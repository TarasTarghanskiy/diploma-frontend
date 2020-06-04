import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../../../services/post/post.service';
import {first} from 'rxjs/operators';
import {AuthService} from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService
  ) {
  }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null),
      text: new FormControl(null)
    });
  }

  sendPost() {
    const serverID = Number.parseInt(this.router.url.split('/')[2], 10);
    this.postService.create({title: this.postForm.value.title, text: this.postForm.value.text, serverID})
      .pipe(first()).subscribe(resp => {
      this.router.navigate(['/server/' + serverID + '/posts']);
    });
  }
}
