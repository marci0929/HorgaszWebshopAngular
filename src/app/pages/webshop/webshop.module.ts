import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebshopRoutingModule } from './webshop-routing.module';
import { WebshopComponent } from './webshop.component';


@NgModule({
  declarations: [
    WebshopComponent
  ],
  imports: [
    CommonModule,
    WebshopRoutingModule
  ]
})
export class WebshopModule { }
