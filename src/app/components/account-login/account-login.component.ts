import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css']
})
export class AccountLoginComponent implements OnInit {
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
      ])
    });
  }

  submit() {
    this.submitted = true;
    const account: any = {
      name: this.form.value.name,
      password: this.form.value.password
    };

    this.auth.login(account)
      .pipe(first())
      .subscribe(() => {
      this.form.reset();
      this.router.navigate(['/story']);
      this.submitted = false;
    }, error => {
      console.log(error);
      if (error.status === 0 || error.status === 500 || error.status === 401) {
        this.errorList = [error.message];
      } else {
        this.errorList = error.error;
      }
      this.submitted = false;
    });
  }
}
