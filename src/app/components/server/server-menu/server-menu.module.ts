import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerMenuComponent } from './server-menu.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [ServerMenuComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    ServerMenuComponent
  ]
})
export class ServerMenuModule { }
