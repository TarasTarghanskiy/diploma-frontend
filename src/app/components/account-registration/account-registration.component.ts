import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-account-registration',
  templateUrl: './account-registration.component.html',
  styleUrls: ['./account-registration.component.css']
})
export class AccountRegistrationComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  errorList: any;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]),
      repeat: new FormControl(null, [
        Validators.required
      ])
    }, {validators: group => group.get('password').value === group.get('repeat').value ? null : {notSame: true}});
  }

  submit() {
    this.submitted = true;
    const account: any = {
      accountName: this.form.value.name,
      accountPassword: this.form.value.password,
    };
    this.auth.registration(account)
      .pipe(first())
      .subscribe(() => {
        this.form.reset();
        this.router.navigate(['/login']);
        this.submitted = false;
      }, error => {
        console.log(error);
        if (error.status === 0 || error.status === 500) {
          this.errorList = [error.message];
        } else {
          this.errorList = error.error;
        }
        this.submitted = false;
      });
  }

}
