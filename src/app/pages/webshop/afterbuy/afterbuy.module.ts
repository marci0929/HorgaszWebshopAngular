import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfterbuyRoutingModule } from './afterbuy-routing.module';
import { AfterbuyComponent } from './afterbuy.component';


@NgModule({
  declarations: [
    AfterbuyComponent
  ],
  imports: [
    CommonModule,
    AfterbuyRoutingModule
  ]
})
export class AfterbuyModule { }
