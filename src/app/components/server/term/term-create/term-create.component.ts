import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TermService} from '../../../../services/term/term.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-term-create',
  templateUrl: './term-create.component.html',
  styleUrls: ['./term-create.component.scss']
})
export class TermCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private termService: TermService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      term: new FormControl(null, [
        Validators.required
      ]),
      description: new FormControl(null, []),
      block: new FormControl(null, [])
    });
  }

  submit() {
    const serverID = Number.parseInt(this.router.url.split('/')[2], 10);
    this.termService.create({
      term: this.form.value.term,
      description: this.form.value.description,
      block: this.form.value.block,
      serverID
    })
      .pipe(first())
      .subscribe(resp => {
        console.log(resp);
        this.router.navigate(['server/' + serverID + '/terms']);
      });
  }
}
