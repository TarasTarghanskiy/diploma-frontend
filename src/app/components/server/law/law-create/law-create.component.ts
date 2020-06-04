import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TermService} from '../../../../services/term/term.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {LawService} from '../../../../services/law/law.service';

@Component({
  selector: 'app-law-create',
  templateUrl: './law-create.component.html',
  styleUrls: ['./law-create.component.css']
})
export class LawCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private lawService: LawService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      lawText: new FormControl(null, [
        Validators.required
      ]),
      punishmentCount: new FormControl(null, [
        Validators.required
      ])
    });
  }

  submit() {
    const serverID = Number.parseInt(this.router.url.split('/')[2], 10);
    this.lawService.create({
      lawText: this.form.value.lawText,
      punishmentCount: this.form.value.punishmentCount,
      serverID
    })
      .pipe(first())
      .subscribe(resp => {
        console.log(resp);
        this.router.navigate(['server/' + serverID + '/laws']);
      });
  }

}
