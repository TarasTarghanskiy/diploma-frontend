import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TermService} from '../../services/term/term.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {ServerService} from '../../services/server/server.service';

@Component({
  selector: 'app-server-create',
  templateUrl: './server-create.component.html',
  styleUrls: ['./server-create.component.css']
})
export class ServerCreateComponent implements OnInit {

  form: FormGroup;
  constructor(
    private serverService: ServerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required
      ]),
      description: new FormControl(null, [])
    });
  }

  submit() {
    this.serverService.createServer({
      name: this.form.value.name,
      description: this.form.value.description
    })
      .pipe(first())
      .subscribe(resp =>  {
        console.log(resp);
        this.router.navigate(['/servers']);
      });
  }
}
