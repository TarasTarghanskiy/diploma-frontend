import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerDetailComponent } from './server-detail.component';
import {RouterModule} from '@angular/router';
import {UserRegistrationModule} from '../user-registration/user-registration.module';



@NgModule({
  declarations: [ServerDetailComponent],
  imports: [
    RouterModule.forChild([{path: '', component: ServerDetailComponent}]),
    CommonModule,
    UserRegistrationModule
  ]
})
export class ServerDetailModule { }
