import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterbuyComponent } from './afterbuy.component';

const routes: Routes = [{ path: ':item_price', component: AfterbuyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfterbuyRoutingModule { }
