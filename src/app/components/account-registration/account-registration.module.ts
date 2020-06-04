import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRegistrationComponent } from './account-registration.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [AccountRegistrationComponent],
  imports: [
    RouterModule.forChild([{path: '', component: AccountRegistrationComponent}]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountRegistrationModule { }
