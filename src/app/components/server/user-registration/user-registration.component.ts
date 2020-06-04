import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServerService} from '../../../services/server/server.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private serverService: ServerService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(null, [Validators.required])
    });
  }

  submit() {
    const serverID = Number.parseInt(this.router.url.split('/')[2], 10);
    this.serverService.createUser({
      userName: this.userForm.value.name,
      serverID
    })
      .pipe(first()).subscribe(resp => {
    });
    this.router.navigate(['/server/' + serverID + '/posts']);
  }
}
