import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountLoginComponent } from './account-login.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [AccountLoginComponent],
  imports: [
    RouterModule.forChild([{path: '', component: AccountLoginComponent}]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountLoginModule { }
